import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className={`mt-52 text-8xl tracking-wider`}>
        Welcome to Quiz Application!
      </h1>

      <Link
        href="/options"
        className="mt-36 rounded-full bg-gradient-to-b from-[#92428e] to-[#922c8d] px-14 py-3 text-center text-2xl tracking-widest shadow-[0px_3px_12px_2px_#f9f971cf] duration-300 hover:translate-y-[4px] hover:shadow-[0px_1px_6px_1px_#f9f971cf] active:shadow-none"
      >
        START
      </Link>
    </main>
  );
}
