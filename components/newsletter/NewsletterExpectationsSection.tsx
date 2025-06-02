export function NewsletterExpectationsSection() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold">What to expect</h3>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <ul className="space-y-2 mb-8">
        <li className="flex items-start">
          <span className="mr-2 text-teal-600">•</span>
          <span>
            <strong>Practical Tips:</strong> Real development cases, best
            practices and tools
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-teal-600">•</span>
          <span>
            <strong>Startup Insights:</strong> Project creation stories,
            mistakes and lessons learned
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-teal-600">•</span>
          <span>
            <strong>Career Advice:</strong> How to grow as a developer and build
            a successful career
          </span>
        </li>
      </ul>
    </div>
  );
}
