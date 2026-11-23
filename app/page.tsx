import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello, my name is Amber Perote</h1>
      <p className="mt-2">
        I am a 3rd year BSIT student at Mater Dei College who is learning web
        development with Next.js. This site is my first app, and I will add my
        projects to it as I learn. Feel free to look around!
      </p>
      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}
