import { UserRoundPlus } from "lucide-react";
import PatientInfoForm from "./PatientInfoForm";
import SelectedSlot from "./SelectedSlot";
import TreatmentDoctorForm from "./TreatmentDoctorForm";

function PatientBooking() {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm">
      <SelectedSlot />

      <div className="mt-5 space-y-5">
        <PatientInfoForm />
        <TreatmentDoctorForm />

        <div className="grid gap-4 pt-2 md:grid-cols-2">
          <button
            type="button"
            className="flex h-10 items-center justify-center gap-2 rounded-md bg-slate-50 text-sm font-bold text-slate-800 hover:bg-slate-100"
          >
            <UserRoundPlus size={18} />
            Add Patient
          </button>

          <button
            type="button"
            className="h-10 rounded-md bg-blue-600 text-sm font-bold text-white hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </section>
  );
}

export default PatientBooking;
