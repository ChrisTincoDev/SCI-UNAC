import React, { useState } from "react";
import ReportsButtons from "./ReportsButtons";
import TableRotacion from "./TableRotacion";
import TableKardex from "./TableKardex";

export default function ContentReports() {
  const [activeIndicator, setActiveIndicator] = useState("rotacion");

  // fecha actual (en formato YYYY-MM-DD)
  const today = new Date();
  const [date, setDate] = useState(today.toISOString().split("T")[0]);

  return (
    <div className="flex flex-col h-full max-h-[100vh] gap-4">
      {/* Botones tipo bento */}
      <ReportsButtons
        activeIndicator={activeIndicator}
        onChange={setActiveIndicator}
      />

      {/* Filtro de fecha */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-600">Seleccionar fecha:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tabla dinámica */}
      <div className="flex-1 min-h-0 bg-white rounded-2xl shadow p-4 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {activeIndicator === "rotacion" ? (
            <TableRotacion date={date} />
          ) : (
            <TableKardex date={date} />
          )}
        </div>
      </div>
    </div>
  );
}
