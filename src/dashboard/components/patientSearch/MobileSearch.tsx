import { Phone } from "lucide-react";

function MobileSearch() {
  return (
    <div className="relative">
      <Phone
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="text"
        placeholder="Search by mobile number"
        className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-medium text-slate-600 outline-none placeholder:text-slate-500 focus:border-blue-400 focus:bg-white"
      />
    </div>
  );
}

export default MobileSearch;
