import BentoCard from "./BentoCard";
import { skills } from "../data/portfolioData";

const { MOBILE, BACKEND } = skills;

// Color-code skill badges
function getSkillBadgeColor(skill) {
  const colorMap = {
    Flutter: "badge-flutter",
    Firebase: "badge-firebase",
    Android: "badge-android",
    AWS: "badge-aws",
    GCP: "badge-gcp",
    React: "badge-react",
    Dart: "badge-dart",
  };
  
  for (const [key, color] of Object.entries(colorMap)) {
    if (skill.includes(key)) return color;
  }
  return "badge-default";
}

export default function SkillsCard() {
  return (
    <BentoCard className="md:col-span-2 p-8">
      <div className="h-full flex flex-col justify-between space-y-6">
        <h2 className="text-2xl font-bold">
          <span className="section-number">05 — </span> Skills
        </h2>

        {/* Frontend */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase mb-3">
            Frontend
          </p>
          <div className="flex flex-wrap gap-2">
            {MOBILE.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase mb-3">
            Backend
          </p>
          <div className="flex flex-wrap gap-2">
            {BACKEND.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function SkillPill({ label }) {
  return (
    <span className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 hover:scale-110 cursor-default ${getSkillBadgeColor(label)}`}>
      {label}
    </span>
  );
}
