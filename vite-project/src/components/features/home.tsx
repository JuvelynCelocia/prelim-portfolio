import { Link } from "react-router-dom";

export default function HomeSection() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Welcome to my portfolio
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-800 md:text-6xl">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Juvelyn Celocia
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            A BSIT student who enjoys learning about web development,
            technology, and creating simple websites and applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View My Projects
            </Link>

            <Link
              to="/about"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-blue-100 md:h-80 md:w-80">
            <div className="flex h-52 w-52 items-center justify-center rounded-full bg-blue-600 text-center text-white shadow-lg md:h-64 md:w-64">
              <div>
                <p className="text-4xl font-bold">JC</p>
                <p className="mt-2 text-sm text-blue-100">
                  BSIT Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}