// src/shared/ModalTransaction.jsx
import React, { useState, useEffect } from "react";

export default function ModalTransaction({ isOpen, onClose, onSave, type }) {
  const [form, setForm] = useState({
    product: "",
    quantity: "",
    unitPrice: "",
    voucher: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [products, setProducts] = useState([]);
  const [isNewProduct, setIsNewProduct] = useState(false);

  const total = form.quantity && form.unitPrice
    ? (parseFloat(form.quantity) * parseFloat(form.unitPrice)).toFixed(2)
    : "0.00";

  useEffect(() => {
    if (!isOpen) return;
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("No se pudo cargar products.json");
        const json = await res.json();
        setProducts(json);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };
    fetchProducts();
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (!form.product || !form.quantity || !form.unitPrice || !form.voucher) return;
    onSave({
      ...form,
      id: Date.now(),
      type,
      total: parseFloat(form.quantity) * parseFloat(form.unitPrice),
      isNew: isNewProduct,
    });
    onClose();
  };

  const handleSelectProduct = (e) => {
    const selected = e.target.value;
    if (selected === "__new__") {
      setIsNewProduct(true);
      setForm({
        ...form,
        product: "",
        unitPrice: "",
      });
    } else {
      setIsNewProduct(false);
      const prod = products.find((p) => p.name === selected);
      setForm({
        ...form,
        product: prod?.name || "",
        unitPrice: prod?.price?.toFixed(2) || "",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 capitalize">
          Nueva {type === "purchase" ? "Compra" : "Venta"}
        </h2>

        <div className="space-y-3">
          {/* Select o input de producto */}
          <div>
            <label className="block text-sm mb-1 text-gray-600">Producto:</label>
            <select
              onChange={handleSelectProduct}
              value={isNewProduct ? "__new__" : form.product || ""}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Selecciona un producto...</option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
              {type === "purchase" && <option value="__new__">➕ Registrar nuevo producto</option>}
            </select>
          </div>

          {/* Campo solo visible si es nuevo producto */}
          {isNewProduct && (
            <input
              name="product"
              placeholder="Nombre del nuevo producto"
              value={form.product}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          )}

          <input
            name="quantity"
            type="number"
            placeholder="Cantidad"
            value={form.quantity}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
          <input
            name="unitPrice"
            type="number"
            step="0.01"
            placeholder="Precio unitario (S/)"
            value={form.unitPrice}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
          <input
            name="voucher"
            placeholder="Código de voucher"
            value={form.voucher}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          {/* Total dinámico */}
          <div className="flex justify-between border-t pt-2 text-gray-700">
            <span>Total:</span>
            <span className="font-semibold">S/ {total}</span>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className={`px-4 py-2 rounded-lg text-white ${
              type === "purchase"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
