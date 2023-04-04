'use client';
function error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1 className="z-50 ml-44 mt-40 text-5xl text-white">{error.message}</h1>
      <button onClick={reset}>Reload</button>
    </div>
  );
}

export default error;
