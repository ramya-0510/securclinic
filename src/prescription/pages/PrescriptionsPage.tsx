import type { Patient, Prescription } from "../types/prescription.types";
import { useState } from "react";
import PrescriptionSearch from "../components/PrescriptionSearch";
import PatientInfo from "../components/PatientInfo";
import ExistingPrescriptions from "../components/ExistingPrescriptions";
import AddPrescriptionForm from "../components/AddPrescriptionForm";
import ViewPrescription from "../components/ViewPrescription";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";

const MOCK_PRESCRIPTIONS: Prescription[] = [
  { id: "1", date: "03 Dec 2025", doctor: "Dr. Prakash", treatment: "Head Pain" },
  { id: "2", date: "16 Oct 2025", doctor: "Dr. Prakash", treatment: "General Checkup" },
];

type View = "search" | "patient" | "addPrescription" | "viewPrescription";

export default function PrescriptionsPage() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [view, setView] = useState<View>("search");
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const handlePatientFound = (p: Patient | null) => {
    if (p) {
      setPatient({
        ...p,
        name: "John Mathew",
        uhid: "C0987654321",
        email: "jmathew@gmail.com",
        lastVisit: "03 Dec 2025",
      });
      setView("patient");
    } else {
      setPatient(null);
      setView("search");
    }
  };

  const handleConfirm = () => {
    setView("patient");
  };

  const handleView = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setView("viewPrescription");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Prescriptions" showSearch={false} />

        <main className="flex flex-1 flex-col overflow-y-auto p-4 gap-3">

          {/* Search — hidden on viewPrescription */}
          {view !== "addPrescription" && view !== "viewPrescription" && (
            <div className="rounded-xl bg-white px-5 py-4 shadow-sm">
              <PrescriptionSearch onPatientFound={handlePatientFound} />
            </div>
          )}

          {/* Empty state */}
          {view === "search" && (
            <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-white shadow-sm text-center">
              <img
                src="src/assets/search.png"
                alt="No patient selected"
                style={{ width: "280px", height: "187px", flexShrink: 0 }}
                className="mb-3 object-contain"
              />
              <h3 className="text-base font-semibold text-gray-700 mb-1">
                No patient selected 🔍
              </h3>
              <p className="text-gray-400 text-sm">
                Search a patient to view prescription history or create a new one.
              </p>
            </div>
          )}

          {/* Patient info + existing prescriptions */}
          {view === "patient" && patient && (
            <div className="flex flex-1 flex-col gap-3">
              <PatientInfo patient={patient} />
              <ExistingPrescriptions
                prescriptions={MOCK_PRESCRIPTIONS}
                onAdd={() => setView("addPrescription")}
                onView={handleView}
              />
            </div>
          )}

          {/* Add prescription form */}
          {view === "addPrescription" && (
            <div className="flex flex-1 flex-col">
              <AddPrescriptionForm
                onBack={() => setView("patient")}
                onConfirm={handleConfirm}
              />
            </div>
          )}

          {/* View prescription */}
          {view === "viewPrescription" && selectedPrescription && (
            <div className="flex flex-1 gap-3 overflow-hidden">
              <ViewPrescription
                prescription={selectedPrescription}
                
              />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}