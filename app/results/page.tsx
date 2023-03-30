'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function Results() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());

  console.log(search);

  return (
    <div className="h-full flex justify-center items-center">
      {/* <h1 className="-mt-36 text-6xl">{`Your answered ${search[0]} correct ${
        Number(search[0]) === 1 ? 'answer' : 'answers'
      } of ${search[1]} questions`}</h1> */}
      <h1 className="-mt-36 text-6xl">
        {`Your score is ${search[0]}/${search[1]}`}{' '}
      </h1>
    </div>
  );
}

export default Results;
