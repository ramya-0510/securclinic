import { UserRoundPlus } from "lucide-react";
import CalendarHeader from "./CalendarHeader";
import DateSelector from "./DateSelector";
import SlotGrid from "./SlotGrid";
import SlotLegend from "./SlotLegend";

interface ScheduleAppointmentProps {
  onAddPatient: () => void;
}

function ScheduleAppointment({ onAddPatient }: ScheduleAppointmentProps) {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-bold text-slate-800">
          Schedule Appointment
        </h2>
        <p className="mt-1 text-xs font-medium text-slate-500">
          Choose date & slot. Max 4 bookings per slot.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        <CalendarHeader />
        <DateSelector />
        <SlotGrid />
        <SlotLegend />

        <button
          type="button"
          onClick={onAddPatient}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-slate-50 text-sm font-bold text-slate-800 hover:bg-slate-100"
        >
          <UserRoundPlus size={18} />
          Add Patient
        </button>
      </div>
    </section>
  );
}

export default ScheduleAppointment;
