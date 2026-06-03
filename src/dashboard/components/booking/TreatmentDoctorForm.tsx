import { ChevronDown, ClipboardPlus, Stethoscope } from "lucide-react";

function TreatmentDoctorForm() {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800">Treatment & Doctor</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-slate-700">Treatment</span>
          <div className="relative mt-2">
            <ClipboardPlus
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <select
              defaultValue=""
              className="h-10 w-full appearance-none rounded-md border border-slate-200 bg-slate-50 pl-10 pr-10 text-xs font-medium text-slate-500 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option value="" disabled>
                Select Treatment
              </option>
              <option>General Checkup</option>
              <option>Tooth Pain</option>
              <option>Consultation</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">Doctor</span>
          <div className="relative mt-2">
            <Stethoscope
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <select
              defaultValue=""
              className="h-10 w-full appearance-none rounded-md border border-slate-200 bg-slate-50 pl-10 pr-10 text-xs font-medium text-slate-500 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option value="" disabled>
                Select Doctor
              </option>
              <option>Dr. Prakash</option>
              <option>Dr. Kavitha</option>
              <option>Dr. Anand</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default TreatmentDoctorForm;
