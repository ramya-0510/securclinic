import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_PAGES = 99;

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function ExistingPatientPagination({ currentPage, onPageChange }: Props) {
  const visiblePages = (): (number | "...")[] => {
    const pages: (number | "...")[] = [1, 2, 3];
    if (currentPage > 4) pages.push("...");
    if (currentPage > 3 && currentPage < TOTAL_PAGES - 1) pages.push(currentPage);
    pages.push("...", TOTAL_PAGES);
    return [...new Set(pages)];
  };

  return (
    <div className="flex items-center justify-end gap-1 pr-1">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-1.5 rounded text-slate-400 hover:text-slate-600 disabled:opacity-30 transition"
      >
        <ChevronLeft size={16} />
      </button>

      {visiblePages().map((page, idx) =>
        page === "..." ? (
          <span key={`dot-${idx}`} className="px-2 text-slate-400 text-sm">...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(Number(page))}
            className={`w-8 h-8 rounded text-sm font-medium transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
        disabled={currentPage === TOTAL_PAGES}
        className="p-1.5 rounded text-slate-400 hover:text-slate-600 disabled:opacity-30 transition"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}