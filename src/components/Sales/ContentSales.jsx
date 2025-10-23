// src/pages/sales/ContentSales.jsx
import React, { useState } from "react";
import ModalTransaction from "../Shared/ModalTransaction";
import { useLocalStorage } from "../Shared/useLocalStorage";

export default function ContentSales() {
  const [sales, setSales] = useLocalStorage("sales", []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSale = (data) => {
    setSales([...sales, data]);
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Nueva Venta
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
            {sales.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{s.product}</td>
                <td className="py-2 px-3">{s.quantity}</td>
                <td className="py-2 px-3">S/ {parseFloat(s.unitPrice).toFixed(2)}</td>
                <td className="py-2 px-3 font-semibold">S/ {parseFloat(s.total).toFixed(2)}</td>
                <td className="py-2 px-3">{s.voucher}</td>
                <td className="py-2 px-3">{s.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalTransaction
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddSale}
        type="sale"
      />
    </div>
  );
}
