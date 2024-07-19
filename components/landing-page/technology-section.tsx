import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import {
  faBootstrap,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import IconTypescript from "../icons/icon-typescript";
import IconNextjs from "../icons/icon-nextjs";
import IconTailwind from "../icons/icon-tailwind";
import IconRedux from "../icons/icon-redux";
import IconRadix from "../icons/icon-radix";
import IconExpress from "../icons/icon-express";
import IconAdonis from "../icons/icon-adonis";

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
          className="col-span-2"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          <h2 className="text-xl text-green-300"># Frontend</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <SkillBadge>
              <IconTypescript className="mr-2 size-[18px]" />
              Typescript
            </SkillBadge>
            <SkillBadge>
              <FontAwesomeIcon icon={faSquareJs} className="size-5 mr-2" />
              Javascript
            </SkillBadge>
            <SkillBadge>
              <FontAwesomeIcon icon={faReact} className="size-5 mr-2" /> React
            </SkillBadge>
            <SkillBadge>
              <IconNextjs className="mr-2 size-[18px]" />
              Next
            </SkillBadge>
            <SkillBadge>
              <IconRadix className="mr-2 size-[18px]" />
              Radix UI
            </SkillBadge>
            <SkillBadge>
              <IconTailwind className="mr-2 size-[18px] " />
              Tailwind
            </SkillBadge>
            <SkillBadge>
              <FontAwesomeIcon icon={faBootstrap} className="mr-2 size-5" />
              Bootstrap
            </SkillBadge>
            <SkillBadge>
              <IconRedux className="mr-2 size-[18px]" />
              Redux
            </SkillBadge>
          </div>
        </SkillCategoryCard>

        <SkillCategoryCard
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          <h2 className="text-xl text-green-300"># Backend</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <SkillBadge>
              <FontAwesomeIcon icon={faNodeJs} className="mr-2 size-5" />
              Node
            </SkillBadge>
            <SkillBadge>
              <IconExpress className="mr-2 size-[18px]" />
              Express
            </SkillBadge>
            <SkillBadge>
              <IconAdonis className="mr-2 size-[18px]" />
              Adonis
            </SkillBadge>
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
      className={cn("space-y-4 rounded-[28px] bg-neutral-200/5 shadow border-neutral-700 p-8", className)}
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
