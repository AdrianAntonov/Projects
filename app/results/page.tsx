'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function Results() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());

  console.log(search);

  return (
    <div className="flex h-full items-center justify-center  ">
      <h1 className="-mt-36 text-6xl">
        {`Your score is ${search[0]}/${search[1]}`}
      </h1>
    </div>
  );
}

export default Results;
