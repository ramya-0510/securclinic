import { Search, CircleHelp } from "lucide-react";

function Header() {
  return (
    <header className="flex min-h-20 items-center justify-between gap-5 border-b border-slate-100 bg-white px-4 py-4 lg:px-5">
      <h2 className="shrink-0 text-2xl font-semibold text-slate-800">
        Welcome, Kavikaran V
      </h2>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-5">
        <div className="relative hidden w-full max-w-147.5 md:block">
          <Search
            size={21}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600"
          />

          <input
            type="text"
            placeholder="Global Search: Patient Name, UHID, Doctor, Appointments..."
            className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-500 focus:border-blue-400 focus:bg-white"
          />
        </div>

        <CircleHelp className="shrink-0 text-slate-700" size={20} />

        <img
          src="src/assets/profile.jpg"
          alt="profile"
          className="h-11 w-11 shrink-0 rounded-md object-cover shadow-sm"
        />
      </div>
    </header>
  );
}

export default Header;
