'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function Results() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = Array.from(searchParams.values());
  const finalAnswers = localStorage.getItem('score');

  // console.log(search);

  return finalAnswers ? (
    <div className="flex h-full flex-col-reverse items-center justify-center">
      <h1 className="-mt-36 text-6xl">
        {`Your score is ${finalAnswers}/${search[0]}`}
      </h1>
      <h3 className="-mt-36 text-4xl">Try another Quiz?</h3>
      <div className="flex gap-24">
        <button
          className="rounded-md border-[1px] border-solid border-[#dadada] bg-[#676767] py-2 px-6 text-2xl hover:bg-[#009488b6] active:bg-zinc-400"
          onClick={() => {
            router.push(`/options`);
            globalThis.localStorage.clear();
          }}
        >
          Yes
        </button>
        <button
          className="rounded-md border-[1px] border-solid border-[#dadada] bg-[#676767] py-2 px-6 text-2xl hover:bg-[#009488b6] active:bg-zinc-400"
          onClick={() => {
            router.push(`/`);
            globalThis.localStorage.clear();
          }}
        >
          No
        </button>
      </div>
    </div>
  ) : (
    <h3 className="-mt-80 text-xl">No results yet</h3>
  );
}

export default Results;
