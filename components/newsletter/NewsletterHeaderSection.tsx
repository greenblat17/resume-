import { Button } from "@/components/ui/button";

export function NewsletterHeaderSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-heading font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Newsletter
        </h2>
        <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow"></div>
      </div>
      <h3 className="text-3xl font-heading font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tech insights & startup stories
        </span>
        <br />
        <span className="text-2xl text-muted-foreground">for developers</span>
      </h3>
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Weekly newsletter with{" "}
        <span className="font-semibold text-foreground">
          practical development advice
        </span>
        , startup stories and insights from an experienced engineer.
      </p>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/30 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-sm font-mono font-medium text-teal-700 dark:text-teal-300">
            1,200+ subscribers read every week
          </p>
        </div>
      </div>

      {/* Newsletter signup form */}
      <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 mb-8 border border-border/50">
        <p className="text-base text-muted-foreground mb-6 font-medium">
          🚀 Subscribe to get access to{" "}
          <span className="font-semibold text-foreground">
            exclusive content
          </span>
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-background text-base font-medium transition-all duration-200"
          />
          <Button className="px-8 py-4 rounded-xl font-heading font-semibold text-base bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Subscribe
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-3 font-medium">
          ✨ Free forever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
