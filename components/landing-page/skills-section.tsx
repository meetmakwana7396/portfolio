import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeIcon } from "lucide-react";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-semibold text-center">Technologies</h1>
      <div className="grid grid-cols-2 gap-4">
        <SkillCategoryCard className="col-span-2">
          <h2 className="text-xl text-green-300"># Frontend</h2>
          <div className="flex gap-4 items-center">
            <SkillBadge>
              <TypeIcon className="mr-2 size-5" />
              Typescript
            </SkillBadge>
            <SkillBadge>
              <FontAwesomeIcon icon={faSquareJs} className="size-5 mr-2" />
              Javascript
            </SkillBadge>
            <SkillBadge>
              <FontAwesomeIcon icon={faReact} className="size-5 mr-2" /> React
            </SkillBadge>
            <SkillBadge>Next</SkillBadge>
          </div>
        </SkillCategoryCard>
        <SkillCategoryCard>
          <h2 className="text-xl text-green-300"># Backend</h2>
          <div>Node, Express, Adonis</div>
        </SkillCategoryCard>
        <SkillCategoryCard>
          <h2 className="text-xl text-green-300"># Database</h2>
          <div>SQL, NoSQL, MySQL, MongoDB, Postgres</div>
        </SkillCategoryCard>
      </div>
    </section>
  );
}

function SkillCategoryCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4 border border-neutral-700 p-8", className)}>
      {children}
    </div>
  );
}

function SkillBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge variant={"default"} className={className}>
      {children}
    </Badge>
  );
}
