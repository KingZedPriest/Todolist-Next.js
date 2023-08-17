import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20 max-w-[30rem] border-2 border-slate-100 mx-auto rounded-2xl py-2 px-2 sm:px-4 lg:px-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-base sm:text-lg lg:text-xl">Todo List</h1>
        <Link
          className="border-2 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none duration-500"
          href="/new"
        >
          New
        </Link>
      </header>
    </div>
  );
}
