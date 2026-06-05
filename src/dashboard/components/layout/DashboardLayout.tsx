import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen bg-[#f7f7f7] text-slate-800 flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <Header />

        <main className="flex-1 overflow-hidden p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;