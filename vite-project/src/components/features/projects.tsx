export default function ProjectsSection() {
  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      description:
        "A simple personal portfolio built with React and Tailwind CSS.",
    },
    {
      number: "02",
      title: "Student Project",
      description:
        "A school project created to practice web development skills.",
    },
    {
      number: "03",
      title: "React Practice App",
      description:
        "A simple application made while learning React components.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            My Work
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800 md:text-4xl">
            My Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Here are some of the projects I created while learning web
            development and React.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                  {project.number}
                </span>

                <span className="text-sm text-gray-400 transition group-hover:text-blue-500">
                  React
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {project.title}
              </h3>

              <p className="mt-3 leading-6 text-gray-600">
                {project.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}