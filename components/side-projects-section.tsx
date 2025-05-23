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
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://video-spark.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                VideoSpark
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Chrome Extension to summarize YouTube Video and get news update about new video from creators to Telegram or Email. AI-powered content summarization with automated notifications.
            </p>
            <p className="text-xs text-muted-foreground mb-4">Tech stack: Chrome Extension, OpenAI API, Next.js</p>
            <ImageGallery 
              images={[
                { src: "/screenshots/videospark-1.png", orientation: "horizontal" },
                { src: "/screenshots/videospark-2.png", orientation: "horizontal" },
                { src: "/screenshots/videospark-3.png", orientation: "horizontal" },
              ]}
              alt="VideoSpark screenshots"
              projectName="VideoSpark"
            />
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://beatboard.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                BeatBoard
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Web-App to track your work time and compete with friends and people from the whole world. Built user time tracking system with real-time leaderboards and social features.
            </p>
            <p className="text-xs text-muted-foreground mb-4">Tech stack: Next.js, MongoDB</p>
            <ImageGallery 
              images={[
                { src: "/screenshots/beatboard-1.png", orientation: "horizontal" },
                { src: "/screenshots/beatboard-2.png", orientation: "horizontal" },
              ]}
              alt="BeatBoard screenshots"
              projectName="BeatBoard"
            />
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://tgnotes-app.site/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                Pocket
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Telegram Mini-App to save useful links, texts and even posts from telegram channels. Built content saving system with categorization for 1K+ active users.
            </p>
            <p className="text-xs text-muted-foreground mb-4">Tech stack: Next.js, Golang, Telegram Bot API, MongoDB</p>
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
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2025
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <a
                href="https://t.me/megacal_bot/app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                MegaCal
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Telegram Mini-App to organize offline meetings with friends and coordinate group events with smart scheduling. Features real-time voting system for meeting locations and times.
            </p>
            <p className="text-xs text-muted-foreground mb-4">Tech stack: React, Java, Spring Boot, PostgreSQL</p>
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
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2024
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="font-medium text-base">Bron</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Service for online restaurant reservations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 