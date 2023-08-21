import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";
async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/")

}
export default function New() {
  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-base sm:text-lg lg:text-xl">New</h1>
      </header>
      <form action={createTodo}>
        <input
          type="text"
          name="title"
          className="w-full rounded-md border-2 border-slate-400 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="mt-4 flex justify-end gap-1">
          <Link
            href=".."
            className="rounded border-2 border-slate-300 px-3 py-1 text-slate-300 outline-none duration-500 focus-within:bg-slate-700 hover:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded border-2 border-slate-300 px-3 py-1 text-slate-300 outline-none duration-500 focus-within:bg-slate-700 hover:bg-slate-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
