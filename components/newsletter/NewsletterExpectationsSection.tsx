export function NewsletterExpectationsSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          What we'll discover together
        </h3>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow"></div>
      </div>

      <ul className="space-y-5 mb-8">
        <li className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200 hover:shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            📚
          </div>
          <div>
            <span className="font-heading font-bold text-teal-600 text-lg">
              Learning Resources
            </span>
            <p className="text-muted-foreground mt-1">
              Books, courses, tools, and articles I'm using to learn product
              development — with honest reviews
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200 hover:shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            🤯
          </div>
          <div>
            <span className="font-heading font-bold text-purple-600 text-lg">
              Raw Discoveries
            </span>
            <p className="text-muted-foreground mt-1">
              Fresh insights, "aha!" moments, and mistakes I made this week —
              unfiltered and real
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200 hover:shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            🛠️
          </div>
          <div>
            <span className="font-heading font-bold text-blue-600 text-lg">
              Practical Experiments
            </span>
            <p className="text-muted-foreground mt-1">
              What I'm trying this week, what worked, what failed spectacularly
              — so you can learn from my experiments
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
