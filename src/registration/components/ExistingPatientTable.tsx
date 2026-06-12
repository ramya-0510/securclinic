import { Eye, CreditCard, PenLine, Phone, Calendar, Activity, UserPlus } from "lucide-react";
import type { ExistingPatient } from "../types/registration.types";

const MOCK_PATIENTS: ExistingPatient[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  patientId: "C0987654321",
  name: "Albert Einstien",
  mobile: "+91 98765 43210",
  dob: "11/06/2002",
  status: i % 2 === 0 ? "last-visit" : "new-admission",
  lastVisit: "03 Dec 2025",
}));

interface Props {
  searchQuery: string;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function ExistingPatientTable({ searchQuery }: Props) {
  const filtered = MOCK_PATIENTS.filter(
    (p) =>
      searchQuery === "" ||
      p.patientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.mobile.includes(searchQuery)
  );

  return (
    <div className="rounded-xl border border-slate-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5">
                <CreditCard size={13} /> Patient ID
              </span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5">
                <PenLine size={13} /> Patient Name
              </span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5">
                <Phone size={13} /> Mobile
              </span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5">
                <Calendar size={13} /> Date of Birth
              </span>
            </th>
            <th className="text-center px-4 py-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center justify-center gap-1.5">
                <Activity size={13} /> Status
              </span>
            </th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr
              key={p.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition"
            >
              <td className="text-center px-4 py-3.5 text-sm text-slate-700">{p.patientId}</td>
              <td className="text-center px-4 py-3.5 text-sm text-slate-800 font-medium">{p.name}</td>
              <td className="text-center px-4 py-3.5 text-sm text-slate-700">{p.mobile}</td>
              <td className="text-center px-4 py-3.5 text-sm text-slate-700">{p.dob}</td>
              <td className="text-left px-4 py-3.5 text-sm text-slate-600">
                {p.status === "last-visit" ? (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400" />
                    Last Visit: {p.lastVisit}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <UserPlus size={13} className="text-slate-400" />
                    New Admission
                  </span>
                )}
              </td>
              <td className="text-center px-4 py-3.5">
                <button className="text-slate-400 hover:text-blue-600 transition">
                  <Eye size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}