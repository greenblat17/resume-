export function NewsletterRecentIssuesSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Recent Learning Notes
        </h3>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow"></div>
      </div>

      <div className="space-y-4">
        <div className="group border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-700 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                This Week
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg group-hover:text-teal-600 transition-colors duration-200">
              I spent $200 on courses and learned this...
            </h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Honest review of 3 product development courses I bought this month —
            which ones were worth it and which were total garbage
          </p>
        </div>

        <div className="group border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-200 dark:hover:border-purple-700 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Beginner Fail
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg group-hover:text-purple-600 transition-colors duration-200">
              My first landing page was terrible (here's why)
            </h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I thought I knew design. I was wrong. Here's what I learned from
            building my first product landing page and getting roasted by the
            internet
          </p>
        </div>

        <div className="group border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Resource Drop
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg group-hover:text-blue-600 transition-colors duration-200">
              5 free tools that actually help beginners
            </h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            No-BS list of free resources I'm actually using to learn product
            development — tested by a complete beginner (me)
          </p>
        </div>
      </div>
    </div>
  );
}
