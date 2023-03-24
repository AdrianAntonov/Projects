'use client';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-[#e38a4682] py-8 px-6 w-screen">
      <button
        onClick={() => router.push('/')}
        className="text-2xl font-bold drop-shadow-[1px_1px_#e38a467f] tracking-widest duration-200 hover:-translate-y-[2px] hover:drop-shadow-[0px_1px_#1a1c1f7f] hover:text-[#f9f971d8]"
      >
        HOME
      </button>
    </div>
  );
}

export default Navbar;
