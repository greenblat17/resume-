export function NewsletterRecentIssuesSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Recent Issues
        </h3>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow"></div>
      </div>

      <div className="space-y-4">
        <div className="group border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-700 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Latest
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg group-hover:text-teal-600 transition-colors duration-200">
              How I increased team productivity by 40%
            </h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Practical methods for organizing development processes that actually
            work in real teams
          </p>
        </div>

        <div className="group border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-200 dark:hover:border-purple-700 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Popular
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg group-hover:text-purple-600 transition-colors duration-200">
              From idea to 1000 users in one month
            </h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-mono text-sm font-medium">MegaCal</span>{" "}
            launch story and first metrics — the good, the bad, and the
            unexpected
          </p>
        </div>

        <div className="group border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Essential
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg group-hover:text-blue-600 transition-colors duration-200">
              5 mistakes every developer makes
            </h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            And how to avoid them based on personal experience (spoiler: I made
            all of them)
          </p>
        </div>
      </div>
    </div>
  );
}
