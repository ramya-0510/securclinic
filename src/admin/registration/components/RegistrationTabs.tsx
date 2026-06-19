interface Props {
  activeTab: "new" | "existing";
  onChange: (tab: "new" | "existing") => void;
}

export default function RegistrationTabs({ activeTab, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange("new")}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition ${
          activeTab === "new"
            ? "bg-blue-600 text-white"
            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
        New Registration
      </button>

      <button
        onClick={() => onChange("existing")}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition ${
          activeTab === "existing"
            ? "bg-blue-600 text-white"
            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        Existing Patient
      </button>
    </div>
  );
}