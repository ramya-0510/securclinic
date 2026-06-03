const dates = [
  { day: "Sunday", date: "07" },
  { day: "Monday", date: "08"  },
  { day: "Tuesday", date: "09", active: true },
  { day: "Wednesday", date: "10" },
  { day: "Thursday", date: "11" },
  { day: "Friday", date: "12" },
];

function DateSelector() {
  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-lg bg-blue-50 sm:grid-cols-6">
      {dates.map((item) => (
        <button
          key={item.day}
          className={`h-17 px-2 text-center transition ${
            item.active
              ? "rounded-lg bg-blue-600 text-white shadow-sm"
              : "text-blue-600 hover:bg-blue-100"
          }`}
        >
          <p className="text-[10px] font-medium">{item.day}</p>
          <p
            className={`mt-1 text-lg font-bold leading-none ${
              item.active ? "text-white" : "text-slate-800"
            }`}
          >
            {item.date}
          </p>
          <p
            className={`mt-1 text-[10px] ${
              item.active ? "text-white/90" : "text-slate-500"
            }`}
          >
            Dec
          </p>
        </button>
      ))}
    </div>
  );
}

export default DateSelector;
