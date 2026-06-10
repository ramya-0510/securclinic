import { CircleHelp, ChevronLeft } from "lucide-react";
import SearchBar from "../ui/SearchBar";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  onBack?: () => void;
}

function Header({ title = "Welcome, Kavikaran V", showSearch = true, onBack }: HeaderProps) {
  console.log("Header onBack:", onBack); // debug

  return (
    <header className="flex min-h-10 items-center justify-between gap-4 border-b border-slate-100 bg-white px-4 py-4 lg:px-5">
      <div className="flex items-center gap-1 shrink-0">
        {onBack !== undefined && (
          <button
            onClick={onBack}
            className="flex items-center justify-center text-slate-600 hover:text-blue-600 transition"
          >
            <ChevronLeft size={22} />
          </button>
        )}
        <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-5">
        {showSearch && (
          <div className="hidden w-full max-w-147.5 md:block">
            <SearchBar placeholder="Global Search: Patient Name, UHID, Doctor, Appointments..." />
          </div>
        )}
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