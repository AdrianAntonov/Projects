import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className={`text-8xl mt-52 tracking-wider`}>
        Welcome to Quiz Application!
      </h1>

      <Link
        href="/options"
        className="mt-36 px-14 py-3 bg-gradient-to-b from-[#92428e]   to-[#922c8d] hover:shadow-[0px_3px_12px_2px_#f9f971cf] rounded-full text-center text-2xl tracking-widest hover:-translate-y-[4px] duration-300 "
      >
        START
      </Link>
    </main>
  );
}
