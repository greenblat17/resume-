import { ProfileHeader } from "@/components/profile-header";
import { AboutSection } from "@/components/about-section";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { SideProjectsSection } from "@/components/side-projects-section";
import { AwardsSection } from "@/components/awards-section";
import { EducationSection } from "@/components/education-section";
import { ContactsSection } from "@/components/contacts-section";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { TechSkillsSection } from "@/components/TechSkillsSection";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <ProfileHeader />
      <AboutSection />
      <WorkExperienceSection />
      <SideProjectsSection />
      <TechSkillsSection />
      <AwardsSection />
      <EducationSection />
      <ContactsSection />

      <Footer />
    </main>
  );
}
