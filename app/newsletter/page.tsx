import { NewsletterProfileSection } from "@/components/newsletter/NewsletterProfileSection";
import { NewsletterHeaderSection } from "@/components/newsletter/NewsletterHeaderSection";
import { NewsletterExpectationsSection } from "@/components/newsletter/NewsletterExpectationsSection";
import { NewsletterRecentIssuesSection } from "@/components/newsletter/NewsletterRecentIssuesSection";

export default function NewsletterPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Profile */}
        <NewsletterProfileSection />

        {/* Right Column - Newsletter */}
        <div className="space-y-8">
          <NewsletterHeaderSection />
          <NewsletterExpectationsSection />
          <NewsletterRecentIssuesSection />
        </div>
      </div>
    </main>
  );
}
