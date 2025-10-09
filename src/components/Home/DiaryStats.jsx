function DiaryStats() {
    return (
        <div class="w-4/7 h-full gap-4 grid grid-cols-2 grid-rows-2">
            <div class="bg-[#3c63ff] shadow-md rounded-2xl p-4 flex flex-col justify-center items-center">
                <div class="w-full flex justify-between items-center">
                    <div class="p-4 bg-[#ecedf8] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m105-399-65-47 200-320 120 140 160-260 120 180 135-214 65 47-198 314-119-179-152 247-121-141-145 233Zm475 159q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM784-80 676-188q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T400-340q0-75 52.5-127.5T580-520q75 0 127.5 52.5T760-340q0 26-7 50.5T732-244l108 108-56 56Z"/></svg>
                    </div>
                    <div class="bg-green-400 px-2 py-1 rounded-2xl text-sm">
                        <p>+ 2.08%</p>
                    </div>
                </div>
                <div class="w-full h-full flex flex-col justify-end items-start text-white gap-4 pb-4">
                    <h2 class="text-sm">Ingresos Totales</h2>
                    <h1 class="text-5xl font-semibold">S/ 3265.90</h1>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-center items-center">
                <div class="w-full flex justify-between items-center">
                    <div class="p-4 bg-[#ecedf8] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
                    </div>
                    <div class="bg-red-500 px-2 py-1 rounded-2xl text-sm text-white">
                        <p>- 0.8    %</p>
                    </div>
                </div>
                <div class="w-full h-full flex flex-col justify-end items-start text-black gap-4 pb-4">
                    <h2 class="text-sm ">Órdenes Totales</h2>
                    <div class="flex items-center gap-4">
                        <h1 class="text-5xl font-semibold">256</h1>
                        <p className="text-sm opacity-90">órdenes</p>
                    </div>
                    
                </div>
            </div>
            <div class="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-center items-center">
                <div class="w-full flex justify-between items-center">
                    <div class="p-4 bg-[#ecedf8] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                    </div>
                    <div class="bg-green-400 px-2 py-1 rounded-2xl text-sm">
                        <p>+ 10.56%</p>
                    </div>
                </div>
                <div class="w-full h-full flex flex-col justify-end items-start text-black gap-4 pb-4">
                    <h2 class="text-sm ">Inventario Total</h2>
                    <div class="flex items-center gap-4">
                        <h1 class="text-5xl font-semibold">1246</h1>
                        <p className="text-sm opacity-90">productos</p>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-center items-center">
                <div class="w-full flex justify-between items-center">
                    <div class="p-4 bg-[#ecedf8] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m105-399-65-47 200-320 120 140 160-260 120 180 135-214 65 47-198 314-119-179-152 247-121-141-145 233Zm475 159q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM784-80 676-188q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T400-340q0-75 52.5-127.5T580-520q75 0 127.5 52.5T760-340q0 26-7 50.5T732-244l108 108-56 56Z"/></svg>
                    </div>
                    <div class="bg-green-400 px-2 py-1 rounded-2xl text-sm">
                        <p>+ 1.45%</p>
                    </div>
                </div>
                <div class="w-full h-full flex flex-col justify-end items-start text-black gap-4 pb-4">
                    <h2 class="text-sm ">Ganancias Netas</h2>
                    <h1 class="text-5xl font-semibold">S/ 1465.90</h1>
                </div>
            </div>
        </div>
    );
}

export default DiaryStats;
