import { Badge } from "../ui/badge";

const skills = [
  {
    category: "Languages",
    items: [
      "C/C++",
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "SQL",
      "GraphQL",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Radix",
      "Shadcn UI",
      "SWR",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Zhustand",
      "Styled Components",
      "Jest",
      "React Testing Library (RTL)",
      "Green Sock Animation Platform (GSAP)",
    ],
  },
  {
    category: "Backend",
    items: ["Node", "Express", "Adonis", "Prisma"],
  },
  {
    category: "Database",
    items: ["MySQL", "NoSQL", "MongoDB", "Postgres"],
  },
  {
    category: "Tools",
    items: [
      "VS Code",
      "Postman",
      "phpMyAdmin",
      "Git",
      "Github",
      "Notion",
      "Vercel",
    ],
  },
  {
    category: "OS",
    items: ["Manjaro", "Fedora", "Ubuntu", "Any other linux distro", "Windows"],
  },
];

export default function TechnologySection() {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-4xl space-y-6 px-4 sm:px-0"
    >
      <h1 className="font-jetBrains text-2xl opacity-50">{`* Skills`}</h1> 
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillBox skill={skill} key={index} />
        ))}
      </div>
    </section>
  );
}

const SkillBox = ({ skill }: { skill: (typeof skills)[0] }) => {
  return (
    <div className="space-y-4 !rounded-[20px] bg-neutral-500/10 p-4">
      <h3 className="font-jetBrains text-sm font-semibold tracking-widest text-neutral-500">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items?.map((item, index: number) => (
          <Badge variant={"secondary"} className="text-sm" key={index}>
            <span key={index} className="">{item}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
};
