'use client';

type TMessage = {
  message: string;
};

type TError = {
  error: TMessage;
  reset: () => void;
};

export default function Error({ error, reset }: TError) {
  return (
    <div>
      This is not loading up: {error.message}
      <div>
        <button onClick={() => reset()}>Reload</button>
      </div>
    </div>
  );
}
