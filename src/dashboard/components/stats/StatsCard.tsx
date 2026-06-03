import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  count: string;
  action: string;
  icon: LucideIcon;
  className?: string;
}

function StatsCard({ title, count, action, icon: Icon, className }: StatsCardProps) {
  return (
    <div className={`rounded-xl bg-blue-100 p-5 flex flex-col justify-between min-h-35 ${className ?? ""}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-4xl font-bold text-blue-600 leading-none">
            {count}
          </h3>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            {title}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-500 shadow-sm">
          <Icon size={22} strokeWidth={1.5} />
        </div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
        {action}
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

export default StatsCard;
