import { useState, useEffect } from "react";

export default function Inventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFromJSON = async () => {
    try {
      const response = await fetch("/products.json");
      if (!response.ok) throw new Error("Error al cargar los productos");
      const data = await response.json();
      setProducts(data);
      localStorage.setItem("globalInventory", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("globalInventory");
    if (saved) {
      setProducts(JSON.parse(saved));
      setLoading(false);
    } else {
      loadFromJSON();
    }
  }, []);

  useEffect(() => {
    const syncChanges = (event) => {
      if (event.key === "globalInventory") {
        const updated = JSON.parse(event.newValue);
        setProducts(updated);
      }
    };
    window.addEventListener("storage", syncChanges);
    return () => window.removeEventListener("storage", syncChanges);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("globalInventory", JSON.stringify(products));
    }
  }, [products]);

  const handleAdd = (index) => {
    const updated = [...products];
    updated[index].quantity += 1;
    setProducts(updated);
  };

  const handleRemove = (index) => {
    const updated = [...products];
    if (updated[index].quantity > 0) {
      updated[index].quantity -= 1;
      setProducts(updated);
    }
  };

  const total = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  if (loading) return <p className="text-gray-500">Cargando productos...</p>;

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md flex flex-col h-full justify-between">

      {/* 🔽 Sección scrollable con altura dinámica */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-230px)] border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left">Producto</th>
              <th className="px-4 py-2 text-center">Cantidad</th>
              <th className="px-4 py-2 text-center">Precio</th>
              <th className="px-4 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2 text-center">{product.quantity}</td>
                <td className="px-4 py-2 text-center">
                  S/ {product.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleRemove(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleAdd(index)}
                    className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total fijo al fondo */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={loadFromJSON}
          className="px-3 py-2 bg-[#3c63ff] text-white rounded-lg hover:shadow-md transition cursor-pointer"
        >
          Actualizar Productos
        </button>
        <span className="text-right font-semibold text-gray-800">Total: S/ {total.toFixed(2)}</span>
      </div>
    </div>
  );
}
