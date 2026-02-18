import BentoCard from "./BentoCard";

export default function ContactCard() {
  return (
    <BentoCard className="md:col-span-2 p-8">
      <div className="h-full flex flex-col justify-between space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="section-number">06 — </span> Connect
          </h2>
          <p className="text-sm text-muted">
            Open to discussions about new projects and opportunities.
          </p>
        </div>

        <div className="space-y-3">
          <ContactButton
            label="X (Twitter)"
            href="https://x.com/fardeenkha4040"
            icon="𝕏"
          />
          <ContactButton
            label="WhatsApp"
            href="https://wa.me/+916376646676"
            icon="💬"
          />
          <a
            href="mailto:fardeenkhan51214@gmail.com"
            className="button-primary w-full text-center block transition-all duration-300"
          >
            Send Email ✉️
          </a>
        </div>
      </div>
    </BentoCard>
  );
}

function ContactButton({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-lg px-4 py-2.5 bg-card text-main border border-card text-sm font-medium hover-bg-card transition-all duration-300 hover:scale-105 hover:shadow-md group"
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        {label}
      </span>
      <span className="text-muted group-hover-text-accent external-link">↗</span>
    </a>
  );
}
