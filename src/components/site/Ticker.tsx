const items = [
  "Architecture",
  "Planning",
  "Structural Engineering",
  "Property Valuation",
  "Anantapur",
  "Andhra Pradesh",
];

const Ticker = () => {
  const all = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-brand-red overflow-hidden py-2.5">
      <div className="flex animate-ticker whitespace-nowrap">
        {all.map((t, i) => (
          <span
            key={i}
            className="text-white text-[9px] uppercase tracking-[0.3em] font-medium px-6"
          >
            {t} <span className="ml-6 opacity-60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
