import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsSection from "../components/stats/StatsSection";
import ScheduleAppointment from "../components/schedule/ScheduleAppointment";
import TodayAppointments from "../components/appointments/TodayAppointments";
import PatientSearch from "../components/patientSearch/PatientSearch";
import PatientBooking from "../components/booking/PatientBooking";

function DashboardPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <StatsSection />

        <div className="grid gap-4 xl:grid-cols-[1fr_557px]">
          <div className="min-w-0">
            {isBookingOpen ? (
              <PatientBooking />
            ) : (
              <ScheduleAppointment onAddPatient={() => setIsBookingOpen(true)} />
            )}
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <TodayAppointments />
            <PatientSearch />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
