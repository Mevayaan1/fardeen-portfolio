import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import BentoCard from "./BentoCard";

// Color-code tech stack based on technology
function getTechBadgeColor(tech) {
  const colorMap = {
    Flutter: "badge-flutter",
    Firebase: "badge-firebase",
    Android: "badge-android",
    AWS: "badge-aws",
    GCP: "badge-gcp",
    React: "badge-react",
    Dart: "badge-dart",
  };
  
  // Check if tech starts with any key
  for (const [key, color] of Object.entries(colorMap)) {
    if (tech.includes(key)) return color;
  }
  return "badge-default";
}

export default function MyWorkCard() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <BentoCard id="mywork" className="md:col-span-1 lg:col-span-3 p-6 md:p-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            <span className="section-number">03 — </span> My Work
          </h2>
          <Link
            to="/projects"
            className="text-accent hover-text-accent-strong font-medium text-sm transition-colors duration-300 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4 pt-4">
          {featuredProjects.slice(0, 2).map((project) => (
            <Link
              key={project.title}
              to="/projects"
              className="project-card card p-5 flex flex-col justify-between cursor-pointer group border border-card"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover-text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-accent font-medium mb-2">
                  {project.problem}
                </p>
                <p className="text-sm text-muted mb-3 line-clamp-2">{project.result}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-top-card">
                {project.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className={`px-2 py-1 text-xs font-medium rounded transition-all duration-300 hover:scale-110 ${getTechBadgeColor(s)}`}
                  >
                    {s}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium text-muted">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
