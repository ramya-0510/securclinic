// InsightsPage.tsx
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import StatCards from "../components/StatCards";
import AppointmentsOverview from "../components/AppointmentsOverview";
import DoctorInsights from "../components/DoctorInsights";
import ConsultationTypes from "../components/ConsultationTypes";
import FinancialInsight from "../components/FinancialInsight";
import PharmacyAnalytics from "../components/PharmacyAnalytics";
import { Calendar, ChevronDown, Download } from "lucide-react";

interface Props {
  onLogoutClick: () => void;
}

export default function InsightsPage({ onLogoutClick }: Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar onLogoutClick={onLogoutClick} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Insights" showSearch={false} />

        <main className="flex flex-1 flex-col overflow-hidden p-4 gap-3">

          <div className="flex items-center justify-between shrink-0">
            <button className="flex items-center gap-2 border border-slate-200 bg-white rounded-lg px-4 py-2 text-sm text-slate-600 hover:border-slate-300 transition">
              <Calendar size={14} className="text-slate-400" />
              Dec 1, 2025 - Dec 31, 2025
              <ChevronDown size={14} className="text-slate-400" />
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition">
              <Download size={14} /> Export
            </button>
          </div>

          <StatCards />

          <div className="flex gap-3 flex-1 min-h-0">
            <div className="w-95 shrink-0 h-full">
                <AppointmentsOverview />
            </div>
            <DoctorInsights />
            <ConsultationTypes />
          </div>

          <div className="flex gap-3 flex-1 min-h-0">
            <div className="w-120 shrink-0 h-full">
                <FinancialInsight />
            </div>
            <PharmacyAnalytics />
          </div>

        </main>
      </div>
    </div>
  );
}