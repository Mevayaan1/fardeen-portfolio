import BentoCard from "./BentoCard";
import { techStackCategories as skillsCategories } from "../data/portfolioData";

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
    <BentoCard className="md:col-span-2 lg:col-span-5 row-span-1 p-6 md:p-8">
      <div className="h-full flex flex-col space-y-6">
        <h2 className="text-2xl font-bold">
          <span className="section-number">05 — </span> Skills
        </h2>

        <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh] pr-1 styled-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {(() => {
              const seen = new Set();
              const norm = (s) => s.toLowerCase().replace(/\s*\(basic\)\s*/i, "");
              return skillsCategories.map((cat) => {
                const uniqueItems = cat.items.filter((item) => {
                  const n = norm(item);
                  if (seen.has(n)) return false;
                  seen.add(n);
                  return true;
                });
                return (
                  <div key={cat.key} className="border-t border-top-card pt-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase">
                      {cat.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {uniqueItems.map((item) => (
                        <SkillPill key={item} label={item} />
                      ))}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
      </div>
      </div>
    </BentoCard>
  );
}

function SkillPill({ label }) {
  const isBasic =
    /\(Basic\)/i.test(label) || /Basics/i.test(label);
  const cleanLabel = label.replace(/\s*\(Basic\)\s*/i, "");
  return (
    <span
      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 hover:scale-110 cursor-default ${getSkillBadgeColor(
        cleanLabel
      )} ${isBasic ? "text-muted border-card" : ""} break-words whitespace-normal min-w-0`}
      title={isBasic ? "Basic" : undefined}
    >
      {cleanLabel}
    </span>
  );
}
