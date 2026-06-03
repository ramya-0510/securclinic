import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

function CalendarHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <CalendarDays size={15} className="text-blue-600" />
        <span>Dec 2025</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100">
          <ChevronLeft size={14} />
        </button>
        <button className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
