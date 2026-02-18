import Header from "../components/Header";
import HeroCard from "../components/HeroCard";
import AboutCard from "../components/AboutCard";
import MyWorkCard from "../components/MyWorkCard";
import ExperienceCard from "../components/Experience";
import SkillsCard from "../components/SkillsCard";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <div className="bg-page text-main min-h-screen">
      {/* <Header /> */}

      <main className="container  mx-auto px-4 sm:px-6 lg:px-4 pt-14 pb-16">
      
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-6 auto-rows-[minmax(200px,auto)]">
          <HeroCard />
          {/* <ExperienceCard /> */}
          
          <AboutCard />
          <MyWorkCard />
          <ExperienceCard />
          
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 auto-rows-[minmax(280px,auto)]">
          {/* <MyWorkCard /> */}
          
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">
          <SkillsCard />
          <ContactCard />
        </section>
      </main>
    </div>
  );
}
