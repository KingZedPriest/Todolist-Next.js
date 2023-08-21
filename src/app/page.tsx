import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {

  const todos = await getTodos()
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-base sm:text-lg lg:text-xl">Todo List</h1>
        <Link
          className="border-2 border-slate-300 text-slate-300 px-3 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none duration-500"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => 
          <TodoItem key={todo.id} {...todo} />
          )}
      </ul>
    </div>
  );
}
