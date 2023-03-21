import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl">Hello to our Quiz Application!</h1>
      <Link href="/options">START</Link>
    </main>
  );
}
