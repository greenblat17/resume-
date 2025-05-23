import { Twitter, Github, Send, Mail, ExternalLink } from "lucide-react";

export function ContactsSection() {
  return (
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
          className="flex items-center gap-3 text-muted-foreground hover:underline transition-colors w-full max-w-xs justify-start"
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-2 rounded-full">
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
          className="flex items-center gap-3 text-muted-foreground hover:underline transition-colors w-full max-w-xs justify-start"
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-2 rounded-full">
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
          className="flex items-center gap-3 text-muted-foreground hover:underline transition-colors w-full max-w-xs justify-start"
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-2 rounded-full">
            <Send size={18} />
          </div>
          <span className="flex items-center gap-1">
            greenblat
            <ExternalLink size={14} className="inline-block" />
          </span>
        </a>
        <a
          href="mailto:a_zhuravlev_9785@mail.ru"
          className="flex items-center gap-3 text-muted-foreground hover:underline transition-colors w-full max-w-xs justify-start"
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-2 rounded-full">
            <Mail size={18} />
          </div>
          <span className="flex items-center gap-1">
            a_zhuravlev_9785@mail.ru
            <ExternalLink size={14} className="inline-block" />
          </span>
        </a>
      </div>
    </section>
  );
} 