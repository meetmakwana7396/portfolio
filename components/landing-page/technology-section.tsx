export default function TechnologySection() {
  return (
    <section
      id="technologies"
      className="mx-auto mt-20 max-w-4xl space-y-6 px-4 sm:px-0"
    >
      <table id="skills-table">
        <tbody>
          <tr className="py-4 align-top">
            <td>Frontend:</td>
            <td className="ps-6">
              Typescript, Javascript, React, Next, Radix, Tailwind, Bootstrap,
              Redux, Zhustand
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Backend:</td>
            <td className="ps-6">Node, Express, Adonis, Prisma</td>
          </tr>
          <tr className="py-4 align-top">
            <td>Database:</td>
            <td className="ps-6">
              SQL, NoSQL, MySQL, MongoDB, Postgres, GraphQL
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Tools:</td>
            <td className="ps-6">
              VS Code, Postman, phpMyAdmin, Git, Github, Notion
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Operating System:</td>
            <td className="ps-6">
              Fedora, Ubuntu, Any other linux distro, Windows
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
