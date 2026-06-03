import { CalendarDays, RefreshCw } from "lucide-react";
import AppointmentList from "./AppointmentList";
import AppointmentTabs from "./AppointmentTabs";

function TodayAppointments() {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-slate-800">
          Today's Appointments
        </h2>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 text-[11px] font-semibold text-slate-500 sm:flex">
            <CalendarDays size={13} className="text-blue-600" />
            09 Dec, Tue
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600">
            <RefreshCw size={15} />
            Refresh
          </button>
        </div>
      </div>

      <div className="mt-3 border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between gap-3">
          <AppointmentTabs />

          <select className="h-7 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 outline-none">
            <option>All Doctors</option>
          </select>
        </div>
      </div>

      <AppointmentList />
    </section>
  );
}

export default TodayAppointments;
