import React from "react";

export default function DateFilter({ date, setDate, label = "Seleccionar fecha" }) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-gray-600">{label}:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
