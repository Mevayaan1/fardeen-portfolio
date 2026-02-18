import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import BentoCard from "../components/BentoCard";

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

export default function Projects() {
  return (
    <div className="bg-page text-main min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-4 pt-14 pb-16">
        <div className="mb-8 animate-slideIn">
          <Link
            to="/"
            className="text-accent hover-text-accent-strong font-medium mb-4 inline-block transition-all duration-300 hover:scale-110 external-link"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Work</h1>
          <p className="text-muted">
            A collection of {projects.length} projects showcasing my expertise in mobile app development, cloud integration, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <BentoCard key={project.title} className="p-6">
              <div className="space-y-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover-text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    Problem: {project.problem}
                  </p>
                  <p className="text-sm text-muted mb-3">
                    Solution: {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-top-card">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-110 ${getTechBadgeColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </main>
    </div>
  );
}
