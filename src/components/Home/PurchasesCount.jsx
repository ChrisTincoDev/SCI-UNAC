function PurchasesCount() {
    return (
        <div class="bg-white shadow-md rounded-2xl w-1/4 h-full p-4 flex flex-col justify-center items-center">
            <div className="w-full flex">
                <h2 class="text-lg font-semibold">Compras Totales</h2>
            </div>
            <div className="w-full h-0.5 bg-[#3c63ff] mt-4 opacity-50"></div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                <h2>Productos comprados</h2>
                <p class="text-5xl font-semibold">386</p>
            </div>
            
        </div>
    );
}
export default PurchasesCount;