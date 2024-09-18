import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Start by visiting the{" "}
            <Link
              href={"/courses"}
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"
            >
              courses
            </Link>{" "}
            main page .
          </li>
          <li className="mb-2">
            Use the default browser back navigation to come back here.
          </li>
          <li className="mb-2">
            Then visit the{" "}
            <Link
              href={"/loan/accomodation"}
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"
            >
              accomodation loan
            </Link>{" "}
            page.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>&copy;2024 EU Study Assist Assessment - Rabiu Ahmad</p>
      </footer>
    </div>
  );
}
