import { CalendarDays, RefreshCw } from "lucide-react";
import AppointmentList from "./AppointmentList";
import AppointmentTabs from "./AppointmentTabs";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Select from "../ui/Select";

function TodayAppointments() {
  return (
    <Card>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-slate-800">
          Today's Appointments
        </h2>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 text-[11px] font-semibold text-slate-500 sm:flex">
            <CalendarDays size={13} className="text-blue-600" />
            09 Dec, Tue
          </div>

          <Button
            variant="ghost"
            leftIcon={<RefreshCw size={15} />}
            className="text-sm font-semibold"
          >
            Refresh
          </Button>
        </div>
      </div>

      <div className="mt-3 border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between gap-3">
          <AppointmentTabs />

          <Select
            options={[{ label: "All Doctors", value: "all" }]}
            className="h-7 min-w-27 text-slate-700"
          />
        </div>
      </div>

      <AppointmentList />
    </Card>
  );
}

export default TodayAppointments;
