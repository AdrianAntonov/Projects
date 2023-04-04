'use client';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();

  const clearLocalStorage = () => {
    globalThis.localStorage.clear();
    router.push('/');
  };

  return (
    <div className="w-screen bg-[#e38a4682] py-8 px-6">
      <button
        onClick={() => clearLocalStorage()}
        className="text-2xl font-bold tracking-widest drop-shadow-[1px_1px_#e38a467f] duration-200 hover:-translate-y-[2px] hover:text-[#f9f971d8] hover:drop-shadow-[0px_1px_#1a1c1f7f]"
      >
        HOME
      </button>
    </div>
  );
}

export default Navbar;
