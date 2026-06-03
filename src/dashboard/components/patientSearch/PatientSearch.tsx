import ImageSearch from "./ImageSearch";
import MobileSearch from "./MobileSearch";

function PatientSearch() {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800">
        Patient Search
      </h2>

      <div className="mt-4 space-y-4">
        <MobileSearch />

        <div className="border-t border-slate-200 pt-3">
          <ImageSearch />
        </div>
      </div>

      <button className="mt-4 h-10 w-full rounded-md bg-blue-600 text-sm font-bold text-white hover:bg-blue-700">
        Search Patient
      </button>
    </section>
  );
}

export default PatientSearch;
