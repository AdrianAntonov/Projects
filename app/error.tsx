'use client';
function error({ error, reset }: { error: Error; reset: () => void }) {
  return <h1 className="z-50 ml-44 mt-40 text-5xl">{error.message}</h1>;
}

export default error;
