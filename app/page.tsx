import Image from "next/image";
import { Github, ExternalLink, Twitter, Send, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      {/* Header with profile */}
      <section className="mb-10 flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/ava2.jpg"
              alt="Alexander Zhuravlev"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-3 right-3 bg-white rounded-full p-1.5 shadow-md">
            <span className="text-xl">🏄‍♂️</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Alexander Zhuravlev
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Software Engineer & Tech-Founder
        </p>

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
        </div>

        <div className="bg-muted rounded-xl p-4 max-w-md mx-auto">
          <p className="text-sm">Trying to change user behaviour.</p>
        </div>
      </section>

      {/* About section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">About Me</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-teal-600">•</span>
            <span>
              Tech founder, full-stack engineer, sometimes indie hacker
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-600">•</span>
            <span>21 yo, cs major</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-600">•</span>
            <span className="flex items-center">
              <span>Love AI & consumer apps</span>
            </span>
          </li>
        </ul>
      </section>

      {/* Working Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Working Experience</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="mb-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
              2025 — Now
            </div>
            <div>
              <div className="font-medium flex items-center gap-2">
                Building own projects
                <Badge
                  variant="outline"
                  className="rounded-full text-xs font-normal"
                >
                  Current
                </Badge>
              </div>
              <div className="text-muted-foreground text-sm mb-3">
                Saint-Petersburg
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
              2024 — 2025
            </div>
            <div>
              <div className="font-medium">
                <a
                  href="https://nexign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Go Developer at Nexign
                  <ExternalLink size={14} />
                </a>
              </div>
              <div className="text-muted-foreground text-sm mb-3">
                Saint-Petersburg
              </div>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>
                    Gather customer requirements, estimate timelines, implement
                    business logic
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Support and development of 10 microservices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>
                    Implemented modern database libraries and system monitoring
                    into the project
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Participated in hiring new employees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>
                    Gave presentations to the Go community within the company
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
              2023 — 2024
            </div>
            <div>
              <div className="font-medium">
                <a
                  href="https://nexign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Java Developer at Nexign
                  <ExternalLink size={14} />
                </a>
              </div>
              <div className="text-muted-foreground text-sm mb-3">
                Saint-Petersburg
              </div>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Created 10 FRX reports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Trained interns and new colleagues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>
                    Participated in the development of a new project
                    architecture for FRX reporting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Side Projects</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex justify-between items-center mb-3">
              <a
                href="https://video-spark.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                AI Summarizer YT Video
                <ExternalLink size={14} />
              </a>
              <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-none">
                2025
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Chrome Extension to summarize YouTube Video and get news update
              about new video from creators to Telegram or Email
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex justify-between items-center mb-3">
              <a
                href="https://beatboard.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                BeatBoard
                <ExternalLink size={14} />
              </a>
              <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-none">
                2025
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Web-App to track your work time and conquer to your friends and
              people from the whole world
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex justify-between items-center mb-3">
              <a
                href="https://tgnotes-app.site/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                Pocket
                <ExternalLink size={14} />
              </a>
              <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-none">
                2025
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Telegram Mini-App to save useful links, texts and even posts from
              telegram channels
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex justify-between items-center mb-3">
              <a
                href="https://t.me/megacal_bot/app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                MegaCal
                <ExternalLink size={14} />
              </a>
              <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-none">
                2025
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Telegram Mini-App to organize offline meetings with friends
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-base">Bron</h3>
              <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-none">
                2024
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Service for online restaurant reservations
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Awards</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-16">
            <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
              2025
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-xl">🏅</span>
              <div className="font-medium">
                Medalist of the ETU Olympiad in Computer Science
              </div>
            </div>
          </div>

          <div className="flex items-start gap-16">
            <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
              2025
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-xl">🏆</span>
              <div className="font-medium">
                Winner of the hackathon Digital Petersburg
              </div>
            </div>
          </div>

          <div className="flex items-start gap-16">
            <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
              2024
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-xl">🏆</span>
              <div className="font-medium">
                Winner of the hackathon Digital Petersburg
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>

        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
              2021 — 2025
            </div>
            <div>
              <div className="font-medium">
                Bachelor of Computer Science at ETU
              </div>
              <div className="text-muted-foreground text-sm mb-3">
                Saint-Petersburg
              </div>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Ranked in the top 5% of universities in the world</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Top 10 technical universities in Russia</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Top 3 technical universities in Saint-Petersburg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
              2018 — 2021
            </div>
            <div>
              <div className="font-medium">
                Informatics and Mathematics Lyceum 393
              </div>
              <div className="text-muted-foreground text-sm mb-3">
                Saint-Petersburg
              </div>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Top 100 best school in Russia</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  <span>Top 15 best school in Saint-Petersburg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="mb-5">
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-xl font-semibold">Contacts</h2>
          <div className="h-px bg-border flex-grow"></div>
        </div>
        <div className="flex flex-col space-y-5">
          <a
            href="https://x.com/jurhasha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors w-full max-w-xs justify-start"
          >
            <div className="bg-black text-white p-2 rounded-full">
              <Twitter size={18} />
            </div>
            <span className="flex items-center gap-1">
              jurhasha
              <ExternalLink size={14} className="inline-block" />
            </span>
          </a>
          <a
            href="https://github.com/greenblat17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors w-full max-w-xs justify-start"
          >
            <div className="bg-gray-900 text-white p-2 rounded-full">
              <Github size={18} />
            </div>
            <span className="flex items-center gap-1">
              greenblat17
              <ExternalLink size={14} className="inline-block" />
            </span>
          </a>
          <a
            href="https://t.me/greenblat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors w-full max-w-xs justify-start"
          >
            <div className="bg-gray-900 text-white p-2 rounded-full">
              <Send size={18} />
            </div>
            <span className="flex items-center gap-1">
              greenblat
              <ExternalLink size={14} className="inline-block" />
            </span>
          </a>
          <a
            href="mailto:a_zhuravlev_9785@mail.ru"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors w-full max-w-xs justify-start"
          >
            <div className="bg-black text-white p-2 rounded-full">
              <Mail size={18} />
            </div>
            <span className="flex items-center gap-1">
              a_zhuravlev_9785@mail.ru
              <ExternalLink size={14} className="inline-block" />
            </span>
          </a>
        </div>
      </section>

      <footer className="text-center text-muted-foreground text-sm border-t pt-6">
        © {new Date().getFullYear()} Alexander Zhuravlev. All rights reserved.
      </footer>

      <ThemeToggle />
    </main>
  );
}
