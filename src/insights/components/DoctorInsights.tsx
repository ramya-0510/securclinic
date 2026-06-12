const doctors = [
  { name: "Dr. Prakash", specialty: "Cardiologist", consultations: 270, consultationPct: 65, availability: 190, availabilityPct: 75, rating: 3 },
  { name: "Dr. Prakash", specialty: "Cardiologist", consultations: 270, consultationPct: 65, availability: 190, availabilityPct: 75, rating: 4 },
];

export default function DoctorInsights() {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 min-h-0">
      <p className="text-sm font-semibold text-slate-800 shrink-0">Doctor Insights</p>

      <div className="flex flex-col gap-2 flex-1 min-h-0">
        {doctors.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col justify-start gap-2 pb-2 border-b border-slate-100 last:border-0 min-h-0">

            {/* Doctor header */}
            <div className="flex items-center gap-2 mb-1">
              <img src="src/assets/profile.jpg" alt={d.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-800">{d.name}</p>
                <p className="text-xs text-slate-400">{d.specialty}</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-5">

              {/* Total Consultations */}
              <div className="flex  flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-slate-400">Total Consultations</p>
                  <p className="text-[10px] font-medium text-slate-400">{d.consultations}</p>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-[#1A73E8]" style={{ width: `${d.consultationPct}%` }} />
                </div>
              </div>

              {/* Total Availability */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-slate-400">Total Availability</p>
                  <p className="text-[10px] font-medium text-slate-400">{d.availability} Hrs</p>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-[#1A73E8]" style={{ width: `${d.availabilityPct}%` }} />
                </div>
              </div>

              {/* Doctor Rating — rectangles not stars */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] text-slate-400">Doctor Rating</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-1.5 flex-1 rounded-full"
                      style={{ background: idx < d.rating ? "#FFDF00" : "#e2e8f0" }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}