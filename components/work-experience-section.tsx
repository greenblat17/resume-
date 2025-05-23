import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WorkExperienceSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Working Experience</h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
            2025 — Now
          </div>
          <div>
            <div className="font-medium flex items-center gap-1">
              Building own projects{" "}
              <Badge
                variant="outline"
                className="rounded-full text-xs font-normal ml-2"
              >
                Current
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm mb-3">
              Saint-Petersburg
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
            2024 — 2025
          </div>
          <div>
            <div className="font-medium">
              <a
                href="https://nexign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                Go Developer at Nexign
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="text-muted-foreground text-sm mb-3">
              Saint-Petersburg
            </div>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>Gather customer requirements, estimate timelines, implement
                  business logic</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>Support and development of 10 microservices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>
                  Implemented modern database libraries and system monitoring
                  into the project</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>Participated in hiring new employees</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>
                  Gave presentations to the Go community within the company</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-muted-foreground text-sm whitespace-nowrap pt-1">
            2023 — 2024
          </div>
          <div>
            <div className="font-medium">
              <a
                href="https://nexign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                Java Developer at Nexign
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="text-muted-foreground text-sm mb-3">
              Saint-Petersburg
            </div>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>Created 10 FRX reports</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>Trained interns and new colleagues</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700">•</span>
                <span>
                  Participated in the development of a new project
                  architecture for FRX reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 