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

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            I'm a <strong>Software Engineer & Tech-Founder</strong> building
            innovative consumer applications that change user behavior.
          </p>

          <p>
            I have commercial experience working with Go microservices at
            Nexign.
          </p>

          <p>
            Now I'm transitioning from development to entrepreneurship and
            product building. I've already created 5 projects including MegaCal,
            Pocket, and BeatBoard, focusing on solving real user problems
            through innovative solutions. My goal is to build products that
            genuinely change how people interact with technology.
          </p>
        </div>
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
  );
}
