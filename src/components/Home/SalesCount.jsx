function SalesCount() {
    return (
        <div class="bg-white shadow-md rounded-2xl w-3/4 p-4 flex flex-col justify-center items-center">
            <div className="w-full flex">
                <h2 class="text-lg font-semibold">Órdenes de Ventas</h2>
            </div>
            <div className="w-full h-0.5 bg-[#3c63ff] mt-4 opacity-50"></div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                <table className="min-w-full text-sm text-left border-collapse text-black">
                    <thead>
                        <tr className="bg-[#f4f6fb] ">
                        <th className="p-3 font-semibold">Canal</th>
                        <th className="p-3 font-semibold">Órdenes</th>
                        <th className="p-3 font-semibold">Empaquetados</th>
                        <th className="p-3 font-semibold">Enviados</th>
                        <th className="p-3 font-semibold">Entregados</th>
                        <th className="p-3 font-semibold">Cancelados</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="hover:bg-[#f9fafc] transition">
                        <td className="p-3 font-medium flex items-center gap-2">
                            🏬 Venta en tienda
                        </td>
                        <td className="p-3">32</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-3 text-green-600 font-semibold">30</td>
                        <td className="p-3 text-red-500 font-semibold">2</td>
                        </tr>
                        <tr className="hover:bg-[#f9fafc] transition">
                        <td className="p-3 font-medium flex items-center gap-2">
                            🌐 Venta por internet
                        </td>
                        <td className="p-3">48</td>
                        <td className="p-3">42</td>
                        <td className="p-3">38</td>
                        <td className="p-3 text-green-600 font-semibold">36</td>
                        <td className="p-3 text-red-500 font-semibold">3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default SalesCount;