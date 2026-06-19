// NewRegistrationPage.tsx
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import Sidebar from "../../dashboard/components/layout/Sidebar";
import Header from "../../dashboard/components/layout/Header";
import RegistrationTabs from "../components/RegistrationTabs";
import NewRegistrationForm from "../components/NewRegistrationForm";
import ExistingPatientSearch from "../components/ExistingPatientSearch";
import ExistingPatientTable from "../components/ExistingPatientTable";
import ExistingPatientPagination from "../components/ExistingPatientPagination";

type Tab = "new" | "existing";

interface Props {
  onLogoutClick: () => void;
}

export default function NewRegistrationPage({ onLogoutClick }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("new");
  const [resetKey, setResetKey] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleReset = () => setResetKey((k) => k + 1);
  const handleSearch = () => setSearchQuery(searchInput);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Patient Management" showSearch={false} />

        <main className="flex flex-1 flex-col overflow-y-auto p-6 gap-4">

          <div className="bg-white rounded-xl shadow-sm p-6 w-full self-start flex flex-col gap-5">

            <div className="flex items-center justify-between">
              <RegistrationTabs activeTab={activeTab} onChange={setActiveTab} />

              {activeTab === "new" && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-blue-600 text-sm font-medium hover:text-blue-700 transition"
                >
                  <RotateCcw size={14} /> Reset
                </button>
              )}

              {activeTab === "existing" && (
                <ExistingPatientSearch
                  value={searchInput}
                  onChange={setSearchInput}
                  onSearch={handleSearch}
                />
              )}
            </div>

            <hr className="border-slate-100" />

            {activeTab === "new" && <NewRegistrationForm key={resetKey} />}
            {activeTab === "existing" && (
              <ExistingPatientTable
                searchQuery={searchQuery}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}

          </div>

          {activeTab === "existing" && (
            <ExistingPatientPagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}

        </main>
      </div>
    </div>
  );
}