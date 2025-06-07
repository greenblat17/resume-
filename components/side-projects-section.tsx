import { ExternalLink } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";

export function SideProjectsSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Side Projects</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="space-y-8">
        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16 pt-1">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://beatboard.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:underline transition-colors flex items-center gap-1"
              >
                BeatBoard
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Web-App to track your work time and compete with friends and
              people from the whole world
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Built user time tracking system with real-time leaderboards and
              beautiful analytics dashboard
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Tech stack: Next.js, Supabase, TailwindCSS
            </p>
            <ImageGallery
              images={[
                {
                  src: "/screenshots/beatboard-1.png",
                  orientation: "horizontal",
                },
                {
                  src: "/screenshots/beatboard-2.png",
                  orientation: "horizontal",
                },
              ]}
              alt="BeatBoard screenshots"
              projectName="BeatBoard"
            />
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16 pt-1">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://tgnotes-app.site/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:underline transition-colors flex items-center gap-1"
              >
                Pocket
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Telegram Mini-App to save & organize useful links, texts and even
              posts from Telegram channels.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Built content saving system with categorization for 1K+ active
              users
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Tech stack: Next.js, Golang, Telegram Bot API, MongoDB
            </p>
            <ImageGallery
              images={[
                { src: "/screenshots/pocket-1.png", orientation: "vertical" },
                { src: "/screenshots/pocket-2.png", orientation: "vertical" },
                { src: "/screenshots/pocket-3.png", orientation: "vertical" },
                { src: "/screenshots/pocket-4.png", orientation: "vertical" },
              ]}
              alt="Pocket screenshots"
              projectName="Pocket"
            />
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16 pt-1">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://t.me/megacal_bot/app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:underline transition-colors flex items-center gap-1"
              >
                MegaCal
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Smart group scheduling Telegram Mini-App that makes organizing
              meetups with friends effortless
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Features real-time voting system for meeting locations and times
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Tech stack: React, Java, Spring Boot, PostgreSQL
            </p>
            <ImageGallery
              images={[
                { src: "/screenshots/megacal-1.png", orientation: "vertical" },
                { src: "/screenshots/megacal-2.png", orientation: "vertical" },
                { src: "/screenshots/megacal-3.png", orientation: "vertical" },
              ]}
              alt="MegaCal screenshots"
              projectName="MegaCal"
            />
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16 pt-1">
            2024
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="font-medium text-base">Bron</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Restaurant reservation service for seamless dining experiences
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Tech stack: Java, Spring Boot, React, PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
