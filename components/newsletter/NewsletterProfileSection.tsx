import Image from "next/image";
import { Github, Twitter, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterProfileSection() {
  return (
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

        <div className="space-y-5 text-base leading-relaxed">
          <p className="text-lg font-medium">
            I'm a{" "}
            <span className="font-heading font-bold text-teal-600 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            learning to bootstrap products from scratch, just like you.
          </p>

          <p className="text-muted-foreground">
            I have experience working with{" "}
            <span className="font-mono text-sm bg-muted px-2 py-1 rounded font-medium">
              Go microservices
            </span>{" "}
            at
            <span className="font-semibold text-foreground"> Nexign</span>, but
            I'm a complete beginner at building products.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I'm not your typical "guru" who teaches from a pedestal. I'm{" "}
            <span className="font-semibold text-foreground">
              learning alongside you
            </span>
            . When I discover something useful — a resource, tool, or insight —
            I share it with you. It's a{" "}
            <span className="font-heading font-bold text-teal-600">
              win-win journey
            </span>
            : we grow together, stumble together, and celebrate small wins
            together.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Find Me
          </h3>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow"></div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 rounded-full font-medium hover:bg-teal-50 hover:border-teal-200 dark:hover:bg-teal-950 transition-all duration-200"
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
            className="gap-2 rounded-full font-medium hover:bg-teal-50 hover:border-teal-200 dark:hover:bg-teal-950 transition-all duration-200"
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
            className="gap-2 rounded-full font-medium hover:bg-teal-50 hover:border-teal-200 dark:hover:bg-teal-950 transition-all duration-200"
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
            className="gap-2 rounded-full font-medium hover:bg-teal-50 hover:border-teal-200 dark:hover:bg-teal-950 transition-all duration-200"
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
  );
}
