import Link from 'next/link'
export default function App() {
  return (
    <>
    <div className="grid place-items-center space-y-4">
      <h1 className="md:text-4xl text-xl">List of Tasks</h1>
      <Link href="./task1" className="underline hover:text-blue-500"> Go to Task one </Link>
      <Link href="./task2" className="underline hover:text-blue-500">Go to task second </Link>
      <Link href="./task3" className="underline hover:text-blue-500">Go to task third</Link>
    </div>
    </>
  );
}
