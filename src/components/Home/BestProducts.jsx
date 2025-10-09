import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Platos", value: 320 },
  { name: "Vasos", value: 275 },
  { name: "Tazas", value: 210 },
  { name: "Termos", value: 180 },
  { name: "Cubiertos", value: 150 },
];

const COLORS = ["#60a5fa", "#34d399", "#facc15", "#f472b6", "#f87171"];

function BestProducts() {
    return(
        <div class="w-3/7 h-full gap-4 flex">
            <div class="bg-white shadow-md rounded-2xl w-full h-full p-4 flex flex-col justify-center items-center">
                <div className="w-full flex flex-col">
                    <h2 class="text-xl font-semibold">Mejores Productos</h2>
                    <p class="text-sm opacity-80">Productos más vendidos en la tienda</p>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value, name) => [`${value} unidades`, name]}
                        contentStyle={{ borderRadius: "10px" }}
                    />
                    <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default BestProducts;