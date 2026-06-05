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
      <div className="flex flex-col gap-3 h-full">
        {/* Stats row */}
        <StatsSection />

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Left column */}
          <div className="h-full overflow-hidden">
            {isBookingOpen ? (
              <PatientBooking onConfirmBooking={() => setIsBookingOpen(false)} />
            ) : (
              <ScheduleAppointment />
            )}
          </div>

          {/* Right column */}
          <div className="grid grid-rows-2 gap-2 h-full min-h-0">
            <div className="min-h-0 overflow-hidden">
              <TodayAppointments />
            </div>
            <div className="min-h-0 overflow-hidden">
              <PatientSearch onSearchPatient={() => setIsBookingOpen(true)} />
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;