import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import PatientInfo from "../components/PatientInfo";
import ExistingPrescriptions from "../components/ExistingPrescriptions";
import PrescriptionSearch from "../components/PrescriptionSearch";
import ViewPrescription from "../components/ViewPrescription";
import type { Patient, Prescription } from "../types/prescription.types";

const MOCK_PRESCRIPTIONS: Prescription[] = [
  { id: "1", date: "03 Dec 2025", doctor: "Dr. Prakash", treatment: "Head Pain" },
  { id: "2", date: "16 Oct 2025", doctor: "Dr. Prakash", treatment: "General Checkup" },
];

export default function PatientPrescriptionsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const patient: Patient = location.state?.patient ?? {
    id: "1",
    name: "John Mathew",
    phone: "+91 98765 43210",
    uhid: "C0987654321",
    email: "jmathew@gmail.com",
    lastVisit: "03 Dec 2025",
  };

  const handleNewSearch = (p: Patient | null) => {
    if (p) navigate("/prescriptions/patient", { state: { patient: p } });
  };

  const handleBack = selectedPrescription ? () => setSelectedPrescription(null) : undefined;

  console.log("selectedPrescription:", selectedPrescription);
  console.log("handleBack:", handleBack);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          title="Prescriptions"
          showSearch={false}
          onBack={handleBack}
        />

        <main className="flex flex-1 flex-col overflow-y-auto p-6 gap-4">
          {selectedPrescription !== null ? (
            <ViewPrescription
              prescription={selectedPrescription}
            />
          ) : (
            <>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <PrescriptionSearch onPatientFound={handleNewSearch} />
              </div>

              <PatientInfo patient={patient} />

              <ExistingPrescriptions
                prescriptions={MOCK_PRESCRIPTIONS}
                onAdd={() => {}}
                onView={(prescription) => {
                  console.log("onView called with:", prescription);
                  setSelectedPrescription(prescription);
                }}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}