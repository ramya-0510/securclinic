import { Badge, Pencil, Phone } from "lucide-react";

function PatientInfoForm() {
  return (
    <div className="border-b border-slate-200 pb-4">
      <h2 className="text-xl font-bold text-slate-800">Patient Information</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-slate-700">Full Name</span>
          <div className="relative mt-2">
            <Pencil
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Enter Full Name"
              className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-medium text-slate-600 outline-none placeholder:text-slate-500 focus:border-blue-400 focus:bg-white"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">
            Mobile Number
          </span>
          <div className="relative mt-2">
            <Phone
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-medium text-slate-600 outline-none placeholder:text-slate-500 focus:border-blue-400 focus:bg-white"
            />
          </div>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-medium text-slate-700">
          Patient ID (UHID)
        </span>
        <div className="relative mt-2">
          <Badge
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Enter Patient ID"
            className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-medium text-slate-600 outline-none placeholder:text-slate-500 focus:border-blue-400 focus:bg-white"
          />
        </div>
      </label>

      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-xs font-medium text-slate-700">Didn't have an id?</p>
        <label className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <input
            type="checkbox"
            defaultChecked
            className="h-3.5 w-3.5 accent-blue-600"
          />
          New Here
        </label>
      </div>
    </div>
  );
}

export default PatientInfoForm;
