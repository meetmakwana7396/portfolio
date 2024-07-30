export default function TechnologySection() {
  return (
    <section
      id="technologies"
      className="space-y-6 max-w-4xl mt-20 px-4 sm:px-0 mx-auto">
      {/* <h2 className="text-2xl flex gap-3 items-center font-semibold">
        <Code2 className="size-8" /> Technologies
      </h2> */}

      <div className="grid grid-cols-1 gap-4">
        <p className="leading-loose">
          <strong className="">Frontend</strong>: Typescript, Javascript, React,
          Next, Radix, Tailwind, Bootstrap, Redux, Zhustand
        </p>
        <p className="leading-loose">
          <strong className="">Backend</strong>: Node, Express, Adonis, Prisma
        </p>
        <p className="leading-loose">
          <strong className="">Database</strong>: SQL, NoSQL, MySQL, MongoDB,
          Postgres, GraphQL
        </p>
        <p className="leading-loose">
          <strong className="">Tools</strong>: VS Code, Postman, phpMyAdmin,
          Git, Github, Notion
        </p>
      </div>
    </section>
  );
}
