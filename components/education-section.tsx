export function EducationSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
            2021 — 2025
          </div>
          <div>
            <div className="font-medium">
              Bachelor of Computer Science at ETU
            </div>
            <div className="text-muted-foreground text-sm mb-3">
              Saint-Petersburg
            </div>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>Ranked in the top 5% of universities in the world</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>Top 10 technical universities in Russia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>Top 3 technical universities in Saint-Petersburg</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
            2018 — 2021
          </div>
          <div>
            <div className="font-medium">
              Informatics and Mathematics Lyceum 393
            </div>
            <div className="text-muted-foreground text-sm mb-3">
              Saint-Petersburg
            </div>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>Top 100 best school in Russia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                <span>Top 15 best school in Saint-Petersburg</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 