export function AboutSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">About Me</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="mr-2 text-gray-700">•</span>
          <span>
            Tech founder, full-stack engineer, sometimes indie hacker
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-gray-700">•</span>
          <span>21 yo, cs major</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-gray-700">•</span>
          <span className="flex items-center">
            <span>Love AI & consumer apps</span>
          </span>
        </li>
      </ul>
    </section>
  );
} 