import React, { useState } from "react";

export default function AddRecordModal({ isOpen, onClose, onSave, type = "compra" }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    product: "",
    qty: "",
    price: "",
    voucher: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.product || !formData.qty || !formData.price) return;
    onSave(formData);
    onClose();
    setFormData({
      date: new Date().toISOString().split("T")[0],
      product: "",
      qty: "",
      price: "",
      voucher: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 capitalize">
          Nueva {type}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Fecha</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Producto</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Ej: Harina 25kg"
              className="border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1 flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Cantidad</label>
              <input
                type="number"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                placeholder="Ej: 10"
                className="border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Precio Unitario (S/)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Ej: 20.5"
                className="border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Código / Voucher</label>
            <input
              type="text"
              name="voucher"
              value={formData.voucher}
              onChange={handleChange}
              placeholder="Ej: CP-001 o VN-045"
              className="border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md border text-gray-700 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
