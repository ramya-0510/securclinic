import { Camera } from "lucide-react";

function ImageSearch() {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-slate-700">Image Search</p>
      <button className="flex h-11 w-full items-center justify-center gap-3 rounded-md border border-slate-200 bg-slate-50 text-sm font-medium text-slate-500 hover:bg-slate-100">
        <Camera size={21} className="text-blue-600" />
        Camera
      </button>
    </div>
  );
}

export default ImageSearch;
