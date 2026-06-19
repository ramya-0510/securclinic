import { Calendar, HeadphonesIcon, UserPlus, FileText } from "lucide-react";

const stats = [
  { label: "Total Appointments", value: "1,540", icon: <Calendar size={20} className="text-white" />, },
  { label: "Completed Consultations", value: "1,230", icon: <HeadphonesIcon size={20} className="text-white" /> },
  { label: "New Patients", value: "345", icon: <UserPlus size={20} className="text-white" /> },
  { label: "Total Revenue", value: "₹50,980", icon: <FileText size={20} className="text-white" /> },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-3 shrink-0">
      {stats.map((s) => (
        <div key={s.label} className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-slate-800">{s.value}</p>
            <p className="text-xs text-slate-400 mt-1">{s.label}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#1A73E8] flex items-center justify-center shrink-0">
            {s.icon}
          </div>
        </div>
      ))}
    </div>
  );
}