import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5.0, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const useCountUp = (end: number, decimals = 0, duration = 1500, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return decimals ? val.toFixed(decimals) : Math.floor(val).toString();
};

const Stat = ({ s, start }: { s: typeof stats[number]; start: boolean }) => {
  const v = useCountUp(s.value, s.decimals ?? 0, 1600, start);
  return (
    <div className="flex flex-col items-center text-center px-4 py-10">
      <div className="font-display font-bold text-[42px] lg:text-[56px] leading-none text-brand-red">
        {v}
        <span>{s.suffix}</span>
      </div>
      <div className="mt-3 text-[9px] uppercase tracking-[0.25em] text-brand-muted font-medium">
        {s.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="bg-white border-b border-brand-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-border">
          {stats.map((s) => (
            <Stat key={s.label} s={s} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
