import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen items-center bg-slate-950 px-6 py-16 text-white sm:px-10">
      <article className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          <span aria-hidden="true" className="mr-2">←</span> Home
        </Link>
        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          About
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          King Godskid
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
          Godskid is a dedicated, intentional, and detail-oriented individual
          who approaches his work with diligence and a strong sense of purpose.
          Passionate about technology, innovation, and creativity, he enjoys
          exploring new ideas, taking on diverse projects, and continuously
          developing his skills. He is driven by growth, excellence, and the
          desire to make meaningful contributions through his work.
        </p>
      </article>
    </main>
  );
}
