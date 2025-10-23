import React, { useEffect, useState } from "react";

/**
 * props:
 *  - date: "YYYY-MM-DD"
 *
 * Lee /products.json y para cada producto muestra:
 * Código | Producto | Fecha | Inventario registrado | Inventario físico | Precisión (%)
 */
export default function TableKardex({ date }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
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

  const rows = products.map((p) => {
    const record = Array.isArray(p.records)
      ? p.records.find((r) => r.date === date)
      : null;

    const registered = record ? record.registered_stock ?? 0 : 0;
    const physical = record ? record.physical_stock ?? 0 : 0;

    let precision = 0;
    if (physical > 0) {
      precision = (registered / physical) * 100;
      if (precision > 100) precision = 100; // ✅ Limitar a 100%
    }

    return {
      id: p.id,
      code: p.id,
      name: p.name,
      date: record ? record.date : "-",
      registered,
      physical,
      precision,
    };
  });

  return (
    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-310px)] border border-gray-200 rounded-lg">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
          <tr>
            <th className="p-2 border border-gray-200">Código de producto</th>
            <th className="p-2 border border-gray-200">Producto</th>
            <th className="p-2 border border-gray-200">Fecha</th>
            <th className="p-2 border border-gray-200 text-center">Inventario registrado</th>
            <th className="p-2 border border-gray-200 text-center">Inventario físico</th>
            <th className="p-2 border border-gray-200 text-center">Precisión (%)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-gray-200 hover:bg-gray-50 transition">
              <td className="p-2 border border-gray-200 text-center">{r.code}</td>
              <td className="p-2 border border-gray-200">{r.name}</td>
              <td className="p-2 border border-gray-200 text-center">{r.date}</td>
              <td className="p-2 border border-gray-200 text-center">{r.registered}</td>
              <td className="p-2 border border-gray-200 text-center">{r.physical}</td>
              <td
                className={`p-2 border border-gray-200 text-center font-semibold ${
                  r.precision < 90
                    ? "text-red-500"
                    : r.precision < 100
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {r.precision.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
