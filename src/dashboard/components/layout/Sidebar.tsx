import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Receipt,
  UserPlus,
  Headphones,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { Fragment } from "react";

function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: CalendarDays, label: "Appointments" },
    { icon: FileText, label: "Prescriptions" },
    { icon: Receipt, label: "Billing" },
    { icon: UserPlus, label: "New Registration" },
    { icon: Headphones, label: "Consultation" },
  ];

  const bottomItems = [
    { icon: BarChart3, label: "Insights" },
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Logout" },
  ];

  return (
    <aside className="hidden min-h-screen w-60 shrink-0 flex-col justify-between border-r border-slate-200 bg-white lg:flex">
      <div>
        <div className="flex h-20 items-center border-b border-slate-100 px-5">
          <div className="flex items-center gap-2">
            <img
              src="src/assets/logo.png"
              alt="SecurClinic logo"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <h1 className="text-xl font-medium tracking-wide text-blue-600">
              SECURCLINIC
            </h1>
          </div>
        </div>

        <div className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Fragment key={item.label}>
                <button
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[15px] font-medium transition
                  ${
                    item.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={19} strokeWidth={2.2} />
                  <span>{item.label}</span>
                </button>

                {item.label === "Billing" && (
                  <div className="my-3 border-t border-slate-200" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="space-y-2 p-4">
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[15px] font-medium text-slate-500 hover:bg-slate-50"
            >
              <Icon size={19} strokeWidth={2.1} />
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
