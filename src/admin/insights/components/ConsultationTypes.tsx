import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Headphones, Building2 } from "lucide-react";

const data = [
  { name: "Online", value: 308,  color: "#A3C7F6" },
  { name: "Clinic", value: 922, color: "#1A73E8" },
];

const total = data.reduce((s, d) => s + d.value, 0);
const onlinePct = Math.round((data[0].value / total) * 100);

export default function ConsultationTypes() {
  return (
    <div className="w-75 shrink-0 bg-white rounded-xl shadow-sm p-4 flex flex-col min-h-0">
      <p className="text-sm font-semibold text-slate-800 mb-1 shrink-0">Consultation Types</p>

      {/* Chart + legend side by side */}
      <div className="flex flex-1 items-center min-h-0">

        {/* Donut — left side */}
        <div className="relative shrink-0" style={{ width: 140, height: 140 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={70}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                strokeWidth={0}
              >
                {data.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center TOTAL label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">TOTAL</p>
            <p className="text-base font-bold text-slate-800">{total.toLocaleString()}</p>
          </div>

          {/* 75% callout bubble — top right */}
          <div className="absolute -top-2 -right-3 bg-white shadow-md rounded-xl px-2 py-0.5">
            <p className="text-xs font-semibold text-slate-600">{onlinePct}%</p>
          </div>
        </div>

       
        {/* Legend — right side, pinned to bottom */}
<div className="flex flex-col justify-end gap-3 ml-8 flex-1 self-stretch">
  {data.map((d) => (
    <div key={d.name} className="flex items-center gap-2">
      <div className="w-4 h-4 rounded" style={{ background: d.color }} />
      {d.name === "Online"
        ? <Headphones size={13} className="text-slate-500" />
        : <Building2 size={13} className="text-slate-500" />
      }
      <span className="text-xs font-medium text-slate-600">{d.name}</span>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}