import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
}

export default function ExistingPatientSearch({ value, onChange, onSearch }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 w-80 focus-within:border-blue-500 transition">
        <Search size={15} className="text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Search by mobile number / Patient ID"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          className="flex-1 text-sm text-slate-700 outline-none placeholder:text-slate-300"
        />
      </div>
      <button
        onClick={onSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition"
      >
        <Search size={15} />
      </button>
    </div>
  );
}