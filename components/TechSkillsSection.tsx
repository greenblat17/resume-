import { Badge } from "@/components/ui/badge";

export function TechSkillsSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Tech Skills</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              JavaScript
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Python
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Go
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Java
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              SQL
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              React
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Next.js
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Tailwind CSS
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              HTML/CSS
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              Node.js
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              FastAPI
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Spring Boot
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Database & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              PostgreSQL
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              MongoDB
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Supabase
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Docker
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Git
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
