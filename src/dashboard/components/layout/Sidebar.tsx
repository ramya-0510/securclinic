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
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../ui/Button";

interface Props {
  onLogoutClick: () => void;
}

function Sidebar({ onLogoutClick }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard",        path: "/dashboard"        },
    { icon: CalendarDays,    label: "Appointments",     path: "/appointments"     },
    { icon: FileText,        label: "Prescriptions",    path: "/prescriptions"    },
    { icon: Receipt,         label: "Billing",          path: "/billing"          },
    { icon: UserPlus,        label: "New Registration", path: "/new-registration" },
    { icon: Headphones,      label: "Consultation",     path: "/consultation"     },
  ];

  const bottomItems = [
    { icon: BarChart3, label: "Insights", path: "/insights" },
    { icon: Settings,  label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="hidden h-screen w-60 shrink-0 flex-col justify-between overflow-hidden border-r border-slate-200 bg-white lg:flex">
      <div>
        {/* Logo */}
        <div className="flex h-12 items-center border-b border-slate-100 px-5">
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

        {/* Top nav items */}
        <div className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon     = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Fragment key={item.label}>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => navigate(item.path)}
                  leftIcon={<Icon size={19} strokeWidth={2.2} />}
                  className={`justify-start gap-3 px-3 py-2.5 text-left text-[15px] font-medium
                    ${isActive
                      ? "bg-blue-50 !text-blue-600"
                      : "!text-slate-500 hover:bg-slate-50"
                    }`}
                >
                  <span>{item.label}</span>
                </Button>

                {item.label === "Billing" && (
                  <div className="my-3 border-t border-slate-200" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom nav items */}
      <div className="space-y-2 p-4">
        {bottomItems.map((item) => {
          const Icon     = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={item.label}
              variant="ghost"
              fullWidth
              onClick={() => navigate(item.path)}
              leftIcon={<Icon size={19} strokeWidth={2.1} />}
              className={`justify-start gap-3 px-3 py-2.5 text-left text-[15px] font-medium
                ${isActive
                  ? "bg-blue-50 !text-blue-600"
                  : "!text-slate-500 hover:bg-slate-50"
                }`}
            >
              {item.label}
            </Button>
          );
        })}

        {/* Logout — opens modal instead of navigating */}
        <Button
          variant="ghost"
          fullWidth
          onClick={onLogoutClick}
          leftIcon={<LogOut size={19} strokeWidth={2.1} />}
          className="justify-start gap-3 px-3 py-2.5 text-left text-[15px] font-medium !text-slate-500 hover:bg-slate-50"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;