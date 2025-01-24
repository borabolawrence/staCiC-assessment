import Link from "next/link";
import { links } from "./constants/links";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <div className="text-center mb-12 cursor-default">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Lawrence Borabo - Technical Worksheet
        </h1>
        <span className="text-sm md:text-lg text-gray-500 font-medium">
          Click the title of the activities below.
        </span>
      </div>

      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            className="block w-full sm:w-auto px-6 py-3 text-center text-lg font-semibold text-gray-500 hover:underline hover:text-blue-500 duration-200 bg-gray-100/20 rounded-md shadow-md hover:shadow-lg">
            {link.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
