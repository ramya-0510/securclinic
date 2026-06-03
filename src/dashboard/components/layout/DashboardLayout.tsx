import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-800 lg:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Header />

        <main className="p-4 lg:p-5">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
