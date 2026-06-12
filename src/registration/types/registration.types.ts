export interface NewPatientForm {
  fullName: string;
  dob: string;
  mobile: string;
  email: string;
  address: string;
  profilePicture: File | null;
}

export interface ExistingPatient {
  id: string;
  patientId: string;
  name: string;
  mobile: string;
  dob: string;
  status: "last-visit" | "new-admission";
  lastVisit?: string;
}