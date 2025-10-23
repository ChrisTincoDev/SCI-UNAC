import { useEffect, useState } from "react";

/**
 * props:
 *  - date: "YYYY-MM-DD"
 *
 * Lee /products.json, para cada producto busca el record de la fecha,
 * y muestra todas las filas (si no hay record, muestra ceros).
 */
export default function TableRotacion({ date }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json"); // coincide con /inventory
        if (!res.ok) throw new Error("No se pudo cargar products.json");
        const json = await res.json();
        if (mounted) setProducts(json);
      } catch (err) {
        console.error(err);
        if (mounted) setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p className="text-gray-500 p-4">Cargando datos...</p>;

  // Genera las filas usando la fecha seleccionada; si no hay record, valores por defecto (0)
  const rows = products.map((p) => {
    const record = Array.isArray(p.records)
      ? p.records.find((r) => r.date === date)
      : null;

    const sales = record ? record.sales ?? 0 : 0;
    const initial = record ? record.initial_stock ?? 0 : 0;
    const finalStock = record ? record.final_stock ?? 0 : 0;
    const avg = (initial + finalStock) / 2;
    const rotation = avg > 0 ? sales / avg : 0;

    return {
      id: p.id,
      code: p.id,
      name: p.name,
      sales,
      initial,
      finalStock,
      avg,
      rotation,
    };
  });

  if (rows.length === 0) {
    return <p className="text-gray-500 p-4">No hay productos.</p>;
  }

  return (
  <div className="flex-1 flex-col max-h-[calc(100vh-310px)]">
    {/* Contenedor scrollable que ocupa el espacio disponible sin salirse */}
    <div className="flex-1 overflow-y-auto border border-gray-200 rounded-lg max-h-[calc(100vh-310px)]">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
          <tr>
            <th className="p-2 border border-gray-200">Código de producto</th>
            <th className="p-2 border border-gray-200">Producto</th>
            <th className="p-2 border border-gray-200 text-center">Salidas</th>
            <th className="p-2 border border-gray-200 text-center">Inventario inicial</th>
            <th className="p-2 border border-gray-200 text-center">Inventario final</th>
            <th className="p-2 border border-gray-200 text-center">
              Inventario promedio
            </th>
            <th className="p-2 border border-gray-200 text-center">Rotación</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-gray-50">
              <td className="p-2 border border-gray-200 text-center">{r.code}</td>
              <td className="p-2 border border-gray-200">{r.name}</td>
              <td className="p-2 border border-gray-200 text-center">{r.sales}</td>
              <td className="p-2 border border-gray-200 text-center">{r.initial}</td>
              <td className="p-2 border border-gray-200 text-center">{r.finalStock}</td>
              <td className="p-2 border border-gray-200 text-center">
                {Number(r.avg).toFixed(2)}
              </td>
              <td className="p-2 border border-gray-200 text-center font-semibold">
                {Number(r.rotation).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

}
