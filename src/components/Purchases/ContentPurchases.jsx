// src/pages/purchases/ContentPurchases.jsx
import React, { useState } from "react";
import ModalTransaction from "../Shared/ModalTransaction";
import { useLocalStorage } from "../Shared/useLocalStorage";

export default function ContentPurchases() {
  const [purchases, setPurchases] = useLocalStorage("purchases", []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPurchase = (data) => {
    setPurchases([...purchases, data]);
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          + Nueva Compra
        </button>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow p-4 overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-2 px-3">Producto</th>
              <th className="py-2 px-3">Cantidad</th>
              <th className="py-2 px-3">P. Unitario (S/)</th>
              <th className="py-2 px-3">Total (S/)</th>
              <th className="py-2 px-3">Voucher</th>
              <th className="py-2 px-3">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{p.product}</td>
                <td className="py-2 px-3">{p.quantity}</td>
                <td className="py-2 px-3">S/ {parseFloat(p.unitPrice).toFixed(2)}</td>
                <td className="py-2 px-3 font-semibold">S/ {parseFloat(p.total).toFixed(2)}</td>
                <td className="py-2 px-3">{p.voucher}</td>
                <td className="py-2 px-3">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalTransaction
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPurchase}
        type="purchase"
      />
    </div>
  );
}
