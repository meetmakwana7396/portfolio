import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";

export default function TechnologySection() {
  return (
    <section id="technologies" className="space-y-6 max-w-4xl mx-auto">
      <h1
        className="text-4xl font-semibold text-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom">
        TECHNOLOGIES
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <SkillCategoryCard
          className="sm:col-span-2"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          <h2 className="text-xl text-green-300"># Frontend</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <SkillBadge>Typescript</SkillBadge>
            <SkillBadge>Javascript</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Next</SkillBadge>
            <SkillBadge>Radix UI</SkillBadge>
            <SkillBadge>Tailwind</SkillBadge>
            <SkillBadge>Bootstrap</SkillBadge>
            <SkillBadge>Redux</SkillBadge>
            <SkillBadge>Zhustand</SkillBadge>
          </div>
        </SkillCategoryCard>

        <SkillCategoryCard
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          <h2 className="text-xl text-green-300"># Backend</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <SkillBadge>Node</SkillBadge>
            <SkillBadge>Express</SkillBadge>
            <SkillBadge>Adonis</SkillBadge>
            <SkillBadge>Prisma</SkillBadge>
          </div>
        </SkillCategoryCard>

        <SkillCategoryCard
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          <h2 className="text-xl text-green-300"># Database</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <SkillBadge>SQL</SkillBadge>
            <SkillBadge>NoSQL</SkillBadge>
            <SkillBadge>MySQL</SkillBadge>
            <SkillBadge>MongoDB</SkillBadge>
            <SkillBadge>Postgres</SkillBadge>
            <SkillBadge>GraphQL</SkillBadge>
          </div>
        </SkillCategoryCard>

        <SkillCategoryCard
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          className="sm:col-span-2">
          <h2 className="text-xl text-green-300"># Tools</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <SkillBadge>VS Code</SkillBadge>
            <SkillBadge>Postman</SkillBadge>
            <SkillBadge>phpMyAdmin</SkillBadge>
            <SkillBadge>Git</SkillBadge>
            <SkillBadge>Github</SkillBadge>
            <SkillBadge>Notion</SkillBadge>
          </div>
        </SkillCategoryCard>
      </div>
    </section>
  );
}

function SkillCategoryCard({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-[28px] bg-neutral-200/5 shadow border-neutral-700 p-8",
        className
      )}
      {...rest}>
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
