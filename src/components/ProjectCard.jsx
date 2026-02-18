import BentoCard from "./BentoCard";
import { projects } from "../data/portfolioData";

export default function ProjectsCard() {
  return (
    <BentoCard id="projects" className="md:col-span-2 lg:col-span-4 p-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">
          <span className="section-number">02 — </span>Featured Work
        </h2>

        <div className="grid md:grid-cols-2 gap-4 pt-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">
                  {p.problem}
                </p>
                <p className="text-sm text-slate-300 mb-3">{p.result}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-700">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-100 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
