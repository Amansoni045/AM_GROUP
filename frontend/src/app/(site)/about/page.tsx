import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/ui/AboutSection";
import CompanyCards from "@/components/about/CompanyCards";
import CEOMessage from "@/components/about/CEOMessage";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TeamSection from "@/components/about/TeamSection";
import AboutFAQ from "@/components/about/AboutFAQ";
import { getTeamData } from "@/lib/team";

export default async function AboutPage() {
  let teamData;
  try {
    teamData = await getTeamData();
  } catch {
    teamData = { leadership: [], departments: [] };
  }

  return (
    <main className="relative bg-[#f4f3ee] text-[#1a1a1a] font-sans scroll-smooth">
      <AboutHero />
      <AboutSection />
      <CompanyCards />
      <CEOMessage />
      <WhyChooseUs />
      <TeamSection teamData={teamData} />
      <AboutFAQ />
    </main>
  );
}
