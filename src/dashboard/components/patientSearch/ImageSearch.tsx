import { Camera } from "lucide-react";
import Button from "../ui/Button";

function ImageSearch() {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-slate-700">Image Search</p>
      <Button
        variant="outline"
        fullWidth
        leftIcon={<Camera size={21} className="text-blue-600" />}
        className="h-11 gap-3 text-sm font-medium"
      >
        Camera
      </Button>
    </div>
  );
}

export default ImageSearch;
