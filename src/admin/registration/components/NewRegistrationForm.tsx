import { useState, useRef } from "react";
import { PenLine, Phone, Mail, MapPin, Calendar, User, RotateCcw, Upload } from "lucide-react";
import type { NewPatientForm } from "../types/registration.types";

function generatePID(): string {
  return "C" + Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

function calcAge(dob: string): number | null {
  if (!dob) return null;
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export default function NewRegistrationForm() {
  const [form, setForm] = useState<NewPatientForm>({
    fullName: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
    profilePicture: null,
  });
  const [pid] = useState<string>(generatePID());
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const age = calcAge(form.dob);

  const handleChange = (field: keyof NewPatientForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setForm({ fullName: "", dob: "", mobile: "", email: "", address: "", profilePicture: null });
    setPreview(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setForm((prev) => ({ ...prev, profilePicture: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log("Register:", { pid, ...form });
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Top row: tabs + reset */}
      {/* (handled by parent) */}

      {/* Form card — stops at natural content height */}
      <div className="bg-white  p-6 flex flex-col gap-6">

        {/* Row 1: Full Name + DOB */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
              <PenLine size={14} className="text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="John Mathew"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="flex-1 text-sm text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
            {form.fullName && (
              <p className="text-xs text-slate-500">
                Your unique PID is ready:{" "}
                <span className="text-blue-600 font-medium">{pid}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">DOB</label>
            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
              <Calendar size={14} className="text-slate-400 shrink-0" />
              <input
                type="date"
                value={form.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="flex-1 text-sm text-slate-800 outline-none"
              />
            </div>
            {age !== null && (
              <p className="text-xs text-slate-500">
                Nice! Your age is{" "}
                <span className="text-blue-600 font-medium">{age} years old</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Mobile + Email */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Mobile Number</label>
            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
              <Phone size={14} className="text-slate-400 shrink-0" />
              <input
                type="tel"
                placeholder="Enter a 10-digit mobile number"
                value={form.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
                maxLength={10}
                className="flex-1 text-sm text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Email Address <span className="text-slate-400 font-normal">( Optional )</span></label>
            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
              <Mail size={14} className="text-slate-400 shrink-0" />
              <input
                type="email"
                placeholder="Enter Email Address"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="flex-1 text-sm text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Address + Profile Picture */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Address</label>
            <div className="flex items-start gap-2 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition min-h-[100px]">
              <MapPin size={14} className="text-slate-400 shrink-0 mt-0.5" />
              <textarea
                placeholder="Enter Full Address"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                rows={3}
                className="flex-1 text-sm text-slate-800 outline-none placeholder:text-slate-300 resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Profile Picture</label>
            <div
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-4 border border-slate-200 rounded-lg px-4 py-4 cursor-pointer hover:bg-slate-50 transition min-h-[100px]"
            >
              {/* Avatar preview */}
              <div className="w-14 h-14 rounded-full border-2 border-slate-200 overflow-hidden flex items-center justify-center bg-slate-100 shrink-0">
                {preview ? (
                  <img src={preview} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <User size={24} className="text-slate-400" />
                )}
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  <Upload size={14} /> Upload Photo
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Allowed: JPG, PNG, Max 5MB.</p>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Register button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3 rounded-lg transition"
        >
          Register Patient
        </button>
      </div>

    </div>
  );
}