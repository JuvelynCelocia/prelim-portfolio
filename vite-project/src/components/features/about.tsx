export default function AboutSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Get to know me
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800 md:text-4xl">
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            I am a BSIT student interested in web development and technology.
            I enjoy learning how websites and applications are created and
            improving my skills through different projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
              01
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Education
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Bachelor of Science in Information Technology
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
              02
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Skills
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              HTML, CSS, JavaScript, React, and Tailwind CSS
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
              03
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Interests
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Web development, technology, and learning new skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}