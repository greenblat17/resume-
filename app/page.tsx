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
import { Button } from "@/components/ui/button";
import { Github, Twitter, Send, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <ProfileHeader />
      <div className="flex gap-3 mb-8">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2 rounded-full"
        >
          <a
            href="https://github.com/greenblat17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2 rounded-full"
        >
          <a
            href="https://x.com/jurhasha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} />
            <span>X</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2 rounded-full"
        >
          <a
            href="https://t.me/greenblat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={16} />
            <span>Telegram</span>
          </a>
        </Button>
        <Button
          asChild
          variant="default"
          size="sm"
          className="gap-2 rounded-full bg-orange-600 hover:bg-orange-700"
        >
          <a href="/newsletter">
            <Mail size={16} />
            <span>Newsletter</span>
          </a>
        </Button>
      </div>
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
