import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import BentoCard from "./BentoCard";
import profileImg from "../assets/profile-img.png";

export default function HeroCard() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <BentoCard className="md:col-span-2 lg:col-span-5 row-span-1 p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4 items-center h-full min-h-105">
        <div className="flex flex-col justify-center space-y-4">
          <span className="section-number">
            01 — Developer
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold leading-tight">
            Building digital products.
          </h1>

          <p className="text-base text-slate-300 max-w-md">
            Full-stack developer focused on shipping high-impact applications for founders and startups.
          </p>

          <div className="flex gap-3 pt-2">
            <Link to="/projects" className="button-primary">
              View Projects
            </Link>
            <button onClick={() => setIsContactOpen(true)} className="button-secondary">
              Contact Me
            </button>
          </div>
        </div>

          <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden bg-gray-800 shrink-0">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {isContactOpen &&
        createPortal(
          <div className="fixed inset-0 z-1000 bg-black/60">
            <div className="flex items-center justify-center w-full h-full">
              <div className="bg-card text-main border border-card rounded-lg p-6 w-full max-w-sm mx-4">
                <h2 className="text-2xl font-bold mb-2">
                  <span className="section-number">06 — </span> Connect
                </h2>
                <p className="text-sm text-muted mb-4">
                  Open to discussions about new projects and opportunities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://x.com/fardeenkha4040"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg px-4 py-2.5 bg-card text-main border border-card text-sm font-medium hover-bg-card transition-all duration-300 hover:scale-105 hover:shadow-md group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">𝕏</span>
                      X (Twitter)
                    </span>
                    <span className="text-muted group-hover-text-accent external-link">↗</span>
                  </a>
                  <a
                    href="https://wa.me/+916376646676"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg px-4 py-2.5 bg-card text-main border border-card text-sm font-medium hover-bg-card transition-all duration-300 hover:scale-105 hover:shadow-md group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">💬</span>
                      WhatsApp
                    </span>
                    <span className="text-muted group-hover-text-accent external-link">↗</span>
                  </a>
                  <a
                    href="mailto:fardeenkhan51214@gmail.com"
                    className="button-primary w-full text-center block transition-all duration-300"
                  >
                    Send Email ✉️
                  </a>
                </div>
                <button onClick={() => setIsContactOpen(false)} className="button-secondary w-full mt-4">
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </BentoCard>
  );
}
