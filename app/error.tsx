'use client';
import { Lato } from 'next/font/google';
import Link from 'next/link';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
});

function error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-24">
      <h1 className="text-4xl tracking-widest">There is a problem</h1>
      <h2
        className={`${lato.className} bg-[#c1c1c1] px-4 py-2 text-3xl text-rose-600`}
      >
        {error.message}
      </h2>
      <div className="flex w-2/12 items-center justify-center gap-9 ">
        <button
          className=" rounded-lg bg-[#ae48319c]  py-1 px-4 text-xl tracking-widest"
          onClick={reset}
        >
          Reload
        </button>
        <Link
          href="/"
          className=" rounded-lg bg-[#ae48319c]  py-1 px-4 text-xl tracking-widest"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default error;
