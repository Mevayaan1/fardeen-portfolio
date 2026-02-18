import BentoCard from "./BentoCard";
import { about } from "../data/portfolioData";

export default function AboutCard() {
  return (
    <BentoCard id="about" className="md:col-span-3 row-span-1 p-8">
      <div className="space-y-6 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2"><span className="section-number">02 — </span>{about.title}</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{about.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {about.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium bg-card text-main rounded-lg border border-card"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-top-card">
          {about.stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-main">{value}</div>
      <div className="text-xs text-slate-400 font-medium mt-1">{label}</div>
    </div>
  );
}
