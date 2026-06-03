const tabs = ["All", "Pending", "Completed", "Cancelled"];

function AppointmentTabs() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`h-6 rounded-md border px-3 text-xs font-medium ${
            tab === "All"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default AppointmentTabs;
