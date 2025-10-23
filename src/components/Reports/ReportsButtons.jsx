import React from "react";

export default function ReportsButtons({ activeIndicator, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => onChange("rotacion")}
        className={`p-6 rounded-2xl shadow-md text-left transition ${
          activeIndicator === "rotacion"
            ? "bg-[#3c63ff] text-white"
            : "bg-white hover:bg-blue-50"
        }`}
      >
        <h2 className="text-lg font-semibold">Rotación de Inventario</h2>
        <p className="text-xs opacity-80">Evalúa la eficiencia de salida del stock</p>
      </button>

      <button
        onClick={() => onChange("kardex")}
        className={`p-6 rounded-2xl shadow-md text-left transition ${
          activeIndicator === "kardex"
            ? "bg-[#3c63ff] text-white"
            : "bg-white hover:bg-blue-50"
        }`}
      >
        <h2 className="text-lg font-semibold">Precisión del Kárdex</h2>
        <p className="text-xs opacity-80">Compara el registro físico y contable</p>
      </button>
    </div>
  );
}
