export default function TechnologySection() {
  return (
    <section
      id="technologies"
      className="mx-auto mt-20 max-w-4xl space-y-6 px-4 sm:px-0"
    >
      <table id="skills-table">
        <tbody className="text-sm sm:text-base">
          <tr className="py-4 align-top">
            <td>Languages:</td>
            <td className="ps-6">
              C/C++, Typescript, Javascript, HTML, CSS, Python, JAVA, SQL,
              GraphQL
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Frameworks/Libraries:</td>
            <td className="ps-6">
              React.js, Next.js, Radix, Shadcn UI, SWR, Tailwind CSS, Bootstrap,
              Redux, Zhustand, Styled Components, Jest, React Testing Library
              (RTL), Green Sock Animation Platform (GSAP).
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Backend:</td>
            <td className="ps-6">Node, Express, Adonis, Prisma</td>
          </tr>
          <tr className="py-4 align-top">
            <td>Database:</td>
            <td className="ps-6">MySQL, NoSQL, MongoDB, Postgres</td>
          </tr>
          <tr className="py-4 align-top">
            <td>Tools:</td>
            <td className="ps-6">
              VS Code, Postman, phpMyAdmin, Git, Github, Notion, Vercel.
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Operating System:</td>
            <td className="ps-6">
              Manjaro, Fedora, Ubuntu, Any other linux distro, Windows
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
