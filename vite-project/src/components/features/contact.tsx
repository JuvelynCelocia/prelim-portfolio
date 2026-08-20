import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Have a question or want to connect? Feel free to send me a
            message.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-blue-600 p-8 text-white shadow-sm">
            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              I am always interested in learning new things, working on
              projects, and connecting with other people interested in
              technology.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm text-blue-200">Name</p>
                <p className="font-medium">Juvelyn Celocia</p>
              </div>

              <div>
                <p className="text-sm text-blue-200">Course</p>
                <p className="font-medium">BS Information Technology</p>
              </div>

              <div>
                <p className="text-sm text-blue-200">Interest</p>
                <p className="font-medium">Web Development</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  placeholder="Your Name"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="min-h-36 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <Button className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-800">
                  Thank You!
                </h3>

                <p className="mt-2 text-gray-600">
                  Thank you for your message!
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}