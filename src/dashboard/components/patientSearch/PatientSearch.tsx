import ImageSearch from "./ImageSearch";
import MobileSearch from "./MobileSearch";
import Button from "../ui/Button";
import Card from "../ui/Card";

function PatientSearch() {
  return (
    <Card>
      <h2 className="text-lg font-bold text-slate-800">
        Patient Search
      </h2>

      <div className="mt-4 space-y-4">
        <MobileSearch />

        <div className="border-t border-slate-200 pt-3">
          <ImageSearch />
        </div>
      </div>

      <Button
        variant="primary"
        fullWidth
        className="mt-4 h-10 text-sm font-bold"
      >
        Search Patient
      </Button>
    </Card>
  );
}

export default PatientSearch;
