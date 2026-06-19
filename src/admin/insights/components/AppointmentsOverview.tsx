import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

const data = [
  { day: "Mo", scheduled: 140, completed: 110 },
  { day: "Tu", scheduled: 65,  completed: 115 },
  { day: "We", scheduled: 107, completed: 33  },
  { day: "Th", scheduled: 113, completed: 78  },
  { day: "Fr", scheduled: 65,  completed: 110 },
  { day: "Sa", scheduled: 30,  completed: 100 },
  { day: "Su", scheduled: 127, completed: 78  },
];

const renderLegend = () => (
  <div className="flex items-center justify-center gap-6 mt-2">
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-sm" style={{ background: "#1A73E8", opacity: 0.4 }} />
      <span className="text-[12px] font-semibold text-slate-600">Scheduled</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-sm" style={{ background: "#1A73E8" }} />
      <span className="text-[12px] font-semibold text-slate-600">Completed</span>
    </div>
  </div>
);

export default function AppointmentsOverview() {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm p-4 flex flex-col h-full">
      <p className="text-sm font-semibold text-slate-800 mb-2 shrink-0">Appointments Overview</p>
      <div className="flex-1 mt-3 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: -30, bottom: 5 }}
            barCategoryGap="25%"
            barGap={3}
          >
            <CartesianGrid vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 50, 100, 150]}
            />
            <Bar dataKey="scheduled" fill="#1A73E8" fillOpacity={0.4} radius={[3, 3, 0, 0]} />
            <Bar dataKey="completed"  fill="#1A73E8" fillOpacity={1}   radius={[3, 3, 0, 0]} />
            <Legend content={renderLegend} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}