const weeks = ["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13","W14","W15","W16","W17","W18","W19","W20"];
const blueData   = [68, 82, 72, 58, 76, 55, 52, 65, 80, 88, 75, 82, 72, 78, 68, 74, 70, 65, 72, 60];
const orangeData = [42, 52, 48, 38, 50, 35, 30, 40, 55, 58, 48, 52, 45, 50, 42, 48, 44, 38, 46, 35];

export default function PharmacyAnalytics() {
  const chartHeight = 100;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm min-h-62.5">
      <p className="text-sm font-bold text-slate-800 mb-3">Pharmacy Analytics</p>

      <div className="flex gap-3 items-stretch">

        {/* LEFT CONTAINER: blue % top-left, orange % top-right, lollipop chart below */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-4 flex flex-col min-h-45">
          {/* Stats row: blue left, orange right */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xl font-bold text-[#1A73E8] leading-tight">75.08%</p>
              <p className="text-xs text-slate-400">purchases</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-[#EF6C00] leading-tight">45.27%</p>
              <p className="text-xs text-slate-400">sales</p>
            </div>
          </div>

          {/* Lollipop chart */}
          <div className="w-80 flex items-end gap-px" style={{ height: chartHeight }}>
            {weeks.map((w, i) => {
              const bH = (blueData[i] / 100) * chartHeight;
              const oH = (orangeData[i] / 100) * chartHeight;
              return (
                <div key={w} className="flex-1 relative" style={{ height: chartHeight, minWidth: 0 }}>
                  {/* Blue dot + stem */}
                  <div className="absolute left-1/2 -translate-x-1 w-2 h-2 rounded-full bg-[#1A73E8] z-10" style={{ top: chartHeight - bH - 4 }} />
                  <div className="absolute left-1/2 -translate-x-px w-0.5 bg-[#93C5FD] opacity-60 rounded-full" style={{ top: chartHeight - bH, height: bH }} />
                  {/* Orange dot + stem */}
                  <div className="absolute left-1/2 -translate-x-1 w-2 h-2 rounded-full bg-[#EF6C00] z-10" style={{ top: chartHeight - oH - 4 }} />
                  <div className="absolute left-1/2 -translate-x-px w-0.5 bg-[#FDBA74] opacity-60 rounded-full" style={{ top: chartHeight - oH, height: oH }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CONTAINER: medicines info + map image */}
        <div className="w-74 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between relative overflow-hidden min-h-45">
          {/* Map image — top-right corner, decorative background */}
          <img
            src="src/assets/map.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 pointer-events-none select-none"
            style={{ height: "100%", width: "auto", opacity: 0.55, objectFit: "contain", objectPosition: "top right" }}
          />

          {/* Medicines sold */}
          <div className="relative z-10">
            <p className="text-2xl font-bold text-[#1A73E8] leading-tight">8,450</p>
            <p className="text-xs text-slate-400 mb-3">Medicines Sold</p>
          </div>

          {/* Bottom content */}
          <div className="relative z-10">
            <p className="text-sm font-semibold text-slate-700 mb-2">Top Selling Medicines</p>
            {["Ibuprofen", "Omeprazole", "Atorvastatin"].map((m) => (
              <div key={m} className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0" />
                {m}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}