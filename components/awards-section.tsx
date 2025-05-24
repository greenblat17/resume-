export function AwardsSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Awards</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="space-y-8">
        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2025
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-xl">🏅</span>
            <div className="font-medium">
              Medalist of the ETU Olympiad in Computer Science
            </div>
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2025
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-xl">🏅</span>
            <div className="font-medium">
              Medalist of the hackathon Digital Petersburg
            </div>
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="text-muted-foreground text-sm whitespace-nowrap w-16">
            2024
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-xl">🏆</span>
            <div className="font-medium">
              Winner of the hackathon Digital Petersburg
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 