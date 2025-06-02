export function NewsletterRecentIssuesSection() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold">Recent Issues</h3>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="space-y-4">
        <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
          <div className="mb-2">
            <h4 className="font-medium text-base">
              How I increased team productivity by 40%
            </h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Practical methods for organizing development processes
          </p>
        </div>

        <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
          <div className="mb-2">
            <h4 className="font-medium text-base">
              From idea to 1000 users in one month
            </h4>
          </div>
          <p className="text-sm text-muted-foreground">
            MegaCal launch story and first metrics
          </p>
        </div>

        <div className="border rounded-xl p-5 hover:shadow-md transition-all hover:border-teal-200">
          <div className="mb-2">
            <h4 className="font-medium text-base">
              5 mistakes every developer makes
            </h4>
          </div>
          <p className="text-sm text-muted-foreground">
            And how to avoid them based on personal experience
          </p>
        </div>
      </div>
    </div>
  );
}
