import BentoCard from "./BentoCard";

export default function HeroCard() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-5 row-span-1 p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-2 items-center h-full min-h-105">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-4">
          <span className="section-number">
            01 — Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building digital products.
          </h1>

          <p className="text-base text-slate-300 max-w-md">
            Full-stack developer focused on shipping high-impact applications for founders and startups.
          </p>

          <div className="flex gap-3 pt-2">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
          <div className="hidden md:flex justify-end">
          <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-800 flex-shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1710119487366-ef814031eaf4?q=80&w=600&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
