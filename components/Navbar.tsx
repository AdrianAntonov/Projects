'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();

  React.useEffect(() => {
    const check = localStorage.getItem('step');
    console.log(check);
  }, []);

  const clearLocalStorage = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
    globalThis.localStorage.clear();

    switch (e.target.id) {
      case 'home':
        router.push('/');
        break;
      case 'options':
        router.push('/options');
        break;
      case 'results':
        router.push('/results');
        break;
      default:
        return;
    }

    // if (e.target.id === 'home') {
    //   router.push('/');
    // }
    // if (e.target.id === 'options') {
    //   router.push('/options');
    // }
    // if (e.target.id === 'results') {
    //   router.push('/results');
    // }
    // console.dir(e.target);
  };

  return (
    <div className="flex w-screen justify-between bg-[#e38a4682] py-8 px-6">
      <button
        id="home"
        onClick={clearLocalStorage}
        className="text-2xl font-bold tracking-widest drop-shadow-[1px_1px_#e38a467f] duration-200 hover:-translate-y-[2px] hover:text-[#f9f971] hover:drop-shadow-[0_20px_25px_#000000] active:translate-y-[2px] active:shadow-none"
      >
        HOME
      </button>
      <div>
        <button
          id="options"
          onClick={clearLocalStorage}
          className="ml-10 text-2xl font-bold tracking-widest drop-shadow-[1px_1px_#e38a467f] duration-200 hover:-translate-y-[2px] hover:text-[#f9f971] hover:drop-shadow-[0_20px_25px_#000000] active:translate-y-[2px] active:shadow-none"
        >
          OPTIONS
        </button>
        <button
          id="results"
          onClick={clearLocalStorage}
          className="ml-10 text-2xl font-bold tracking-widest drop-shadow-[1px_1px_#e38a467f] duration-200 hover:-translate-y-[2px] hover:text-[#f9f971] hover:drop-shadow-[0_20px_25px_#000000] active:translate-y-[2px] active:shadow-none"
        >
          RESULTS
        </button>
      </div>
    </div>
  );
}

export default Navbar;
