import { UserRoundPlus } from "lucide-react";
import CalendarHeader from "./CalendarHeader";
import DateSelector from "./DateSelector";
import SlotGrid from "./SlotGrid";
import SlotLegend from "./SlotLegend";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface ScheduleAppointmentProps {
  onAddPatient: () => void;
}

function ScheduleAppointment({ onAddPatient }: ScheduleAppointmentProps) {
  return (
    <Card className="flex h-full flex-col">
      <div>
        <h2 className="text-lg font-bold text-slate-800">
          Schedule Appointment
        </h2>
        <p className="mt-1 text-xs font-medium text-slate-500">
          Choose date & slot. Max 4 bookings per slot.
        </p>
      </div>

      <div className="mt-7 flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-4">
          <CalendarHeader />
          <DateSelector />
          <SlotGrid />
        </div>

        <SlotLegend />

        <Button
          variant="secondary"
          onClick={onAddPatient}
          fullWidth
          leftIcon={<UserRoundPlus size={18} />}
          className="h-10 text-sm font-bold"
        >
          Add Patient
        </Button>
      </div>
    </Card>
  );
}

export default ScheduleAppointment;
