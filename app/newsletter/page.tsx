import Image from "next/image";
import { Github, Twitter, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NewsletterPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Profile */}
        <div>
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 mx-auto">
              <Image
                src="/ava2.jpg"
                alt="Alexander Zhuravlev"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>
                  I'm a <strong>Software Engineer & Tech-Founder</strong>{" "}
                  building innovative consumer applications that change user
                  behavior.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>
                  I have commercial experience working with Go microservices at
                  Nexign, where I developed and maintained 10+ microservices and
                  participated in hiring processes.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>
                  I'm transitioning from development to building my own
                  startups. I've already created 5 projects and now focusing on
                  entrepreneurship.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">Find Me</h3>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <div className="flex gap-3">
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
                  href="https://linkedin.com/in/alexander-zhuravlev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
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
          </div>
        </div>

        {/* Right Column - Newsletter */}
        <div className="space-y-8">
          {/* Newsletter Header */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold">Newsletter</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Tech insights & startup stories for developers
            </h3>
            <p className="text-muted-foreground mb-6">
              Weekly newsletter with practical development advice, startup
              stories and insights from an experienced engineer.
            </p>

            <p className="text-sm text-muted-foreground mb-6">
              1,200+ subscribers read every week
            </p>

            {/* Newsletter signup form */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to get access to exclusive content
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                />
                <Button className="px-6 py-3 rounded-lg">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Free. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* What to expect */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">What to expect</h3>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>
                  <strong>Practical Tips:</strong> Real development cases, best
                  practices and tools
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>
                  <strong>Startup Insights:</strong> Project creation stories,
                  mistakes and lessons learned
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>
                  <strong>Career Advice:</strong> How to grow as a developer and
                  build a successful career
                </span>
              </li>
            </ul>
          </div>

          {/* Recent newsletters preview */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">Recent Issues</h3>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
                <div className="mb-2">
                  <h4 className="font-medium text-base">
                    How I increased team productivity by 40%
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Practical methods for organizing development processes
                </p>
              </div>

              <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
                <div className="mb-2">
                  <h4 className="font-medium text-base">
                    From idea to 1000 users in one month
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  MegaCal launch story and first metrics
                </p>
              </div>

              <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
                <div className="mb-2">
                  <h4 className="font-medium text-base">
                    5 mistakes every developer makes
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  And how to avoid them based on personal experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
