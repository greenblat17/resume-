import { Button } from "@/components/ui/button";

export function NewsletterHeaderSection() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Newsletter</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>
      <h3 className="text-2xl font-bold mb-4">
        Tech insights & startup stories for developers
      </h3>
      <p className="text-muted-foreground mb-6">
        Weekly newsletter with practical development advice, startup stories and
        insights from an experienced engineer.
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
  );
}
