import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer,
  ReferenceLine, PieChart, Pie, Cell
} from "recharts";

const monthData = [
  { w: "1", offline: 72,  online: 52 },
  { w: "2", offline: 88,  online: 45 },
  { w: "3", offline: 80,  online: 70 },
  { w: "4", offline: 65,  online: 42 },
  { w: "5", offline: 76,  online: 62 },
  { w: "6", offline: 63,  online: 50 },
  { w: "7", offline: 58,  online: 63 },
];

const pieData = [
  { name: "Offline Payments", value: 63, color: "#A3C7F6" },
  { name: "Online Payments",  value: 37, color: "#1A73E8" },
];

// Custom label for 37% badge on the blue slice
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <g>
      <rect x={x - 18} y={y - 10} width={36} height={20} rx={5} ry={5} fill="white" />
      <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight={600} fill="#374151">
        37%
      </text>
    </g>
  );
};

export default function FinancialInsight() {
  const [view, setView] = useState<"month" | "year">("month");

  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm p-4 flex flex-col min-h-0">

      {/* Header */}
      <div className="flex items-center justify-between shrink-0 mb-2">
        <p className="text-sm font-semibold text-slate-800">Financial Insight</p>
        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5">
          {(["Year", "Month"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v.toLowerCase() as "month" | "year")}
              className={`text-xs px-4 py-1.5 rounded-md transition font-medium ${
                view === v.toLowerCase()
                  ? "bg-[#1A73E8] text-white"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 gap-2 min-h-0">

        {/* Left: dots chart + revenue */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthData}
                margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
              >
                {/* No X axis labels */}
                <XAxis dataKey="w" hide />
                <YAxis hide domain={[35, 95]} />

                {/* Dashed green reference line */}
                <ReferenceLine
                  y={63}
                  stroke="#16C472"
                  strokeDasharray="6 3"
                  strokeWidth={2}
                />

                {/* Vertical dashed grid lines */}
                {monthData.map((d) => (
                  <ReferenceLine
                    key={d.w}
                    x={d.w}
                    stroke="#cbd5e1"
                    strokeDasharray="4 2"
                    strokeWidth={1.5}
                  />
                ))}

                {/* Offline — red dots only, no line */}
                <Line
                  type="linear"
                  dataKey="offline"
                  stroke="transparent"
                  strokeWidth={0}
                  dot={{ fill: "#C62828", r: 4, strokeWidth: 0 }}
                  activeDot={false}
                  isAnimationActive={false}
                />

                {/* Online — green dots only, no line */}
                <Line
                  type="linear"
                  dataKey="online"
                  stroke="transparent"
                  strokeWidth={0}
                  dot={{ fill: "#16C472", r: 4, strokeWidth: 0 }}
                  activeDot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue info */}
          <div className="shrink-0 mt-1">
            <p className="text-xs text-slate-400">Total Revenue</p>
            <p className="text-lg font-bold text-slate-800">₹50,980</p>
            <p className="text-xs font-medium text-slate-500">Monthly Growth: 12%</p>
          </div>
        </div>

        {/* Right: donut + legend */}
        {/* Right: donut + legend */}
        <div className="w-52 shrink-0 flex flex-col justify-between">
 
          {/* Donut — large, fully visible */}
          <div className="relative flex-1 min-h-0" style={{ minHeight: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius="38%"
                  outerRadius="72%"
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={2}
                  stroke="white"
                  labelLine={false}
                  label={(props) =>
                    props.index === 1 ? renderCustomLabel(props) : null
                  }
                >
                  {pieData.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
 
          {/* Legend — horizontal row at bottom */}
          <div className="flex items-center justify-center gap-4 shrink-0 pb-1">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-[10px] text-slate-600">
                <div className="w-2 h-2 square shrink-0" style={{ background: d.color }} />
                {d.name}
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </div>
  );
}
 