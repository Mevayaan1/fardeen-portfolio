import BentoCard from "./BentoCard";
import { experience } from "../data/portfolioData";

export default function ExperienceCard() {
  return (
    <BentoCard id="experience" className="md:col-span-2 lg:col-span-5 row-span-1 p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">
        <span className="section-number">04 — </span> Experience
      </h2>

      <div className="space-y-5">
        {experience.map((exp) => (
          <ExperienceItem
            key={exp.role}
            role={exp.role}
            time={exp.time}
            points={exp.points}
          />
        ))}
      </div>
    </BentoCard>
  );
}

function ExperienceItem({ role, time, points }) {
  return (
    <div className="pb-4 border-b border-top-card last:border-b-0 last:pb-0 transition-all duration-300 hover:pl-2">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-main hover-text-accent-strong transition-colors duration-300">{role}</h3>
        <span className="text-xs text-main whitespace-nowrap ml-2 bg-card px-2 py-1 rounded">{time}</span>
      </div>
      <ul className="text-sm text-muted space-y-1">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-accent flex-shrink-0 transition-transform duration-300">→</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
