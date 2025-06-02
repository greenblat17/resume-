export function NewsletterExpectationsSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          What to expect
        </h3>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow"></div>
      </div>

      <ul className="space-y-5 mb-8">
        <li className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200 hover:shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            💡
          </div>
          <div>
            <span className="font-heading font-bold text-teal-600 text-lg">
              Practical Tips
            </span>
            <p className="text-muted-foreground mt-1">
              Real development cases, best practices and tools that actually
              work in production
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200 hover:shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            🚀
          </div>
          <div>
            <span className="font-heading font-bold text-purple-600 text-lg">
              Startup Insights
            </span>
            <p className="text-muted-foreground mt-1">
              Project creation stories, mistakes I made and lessons learned the
              hard way
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200 hover:shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            📈
          </div>
          <div>
            <span className="font-heading font-bold text-blue-600 text-lg">
              Career Advice
            </span>
            <p className="text-muted-foreground mt-1">
              How to grow as a developer and build a successful tech career
              without burning out
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
