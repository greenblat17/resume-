import Image from "next/image";
import { Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
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

      <div className="flex flex-wrap gap-3 mb-8 justify-center">  
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
  );
} 