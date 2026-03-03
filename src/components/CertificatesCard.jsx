import BentoCard from "./BentoCard";
import { certificates } from "../data/portfolioData";

export default function CertificatesCard() {
  return (
    // moved to the work card position, shrink to the same span
    <BentoCard id="certificates" className="md:col-span-1 lg:col-span-3 p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-4">
        <span className="section-number">07 — </span> Certificates
      </h2>
      {certificates && certificates.length > 0 ? (
        <div className="space-y-4">
          {certificates.map((c) => (
            <div
              key={`${c.title}-${c.issuer}-${c.year}`}
              className="flex items-center justify-between pb-3 border-b border-top-card last:border-0 last:pb-0"
            >
              <div>
                <div className="font-semibold text-main">{c.title}</div>
                <div className="text-xs text-muted mt-1">
                  {c.issuer} • {c.year}
                </div>
              </div>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary text-sm px-3 py-1.5 flex items-center gap-1"
                >
                  Verify <span className="external-link">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No certificates added yet.</p>
      )}
    </BentoCard>
  );
}
