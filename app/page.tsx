import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-slate-950 px-6 py-16 text-white sm:px-10">
      <section className="mx-auto w-full max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Hello, I&apos;m
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          King Godskid
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
          Dedicated to thoughtful work, creative ideas, and making meaningful
          contributions through technology.
        </p>
        <Link
          href="/about"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          About me <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </section>
    </main>
  );
}
