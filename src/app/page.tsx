import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

function getTodos() {
  return prisma.todo.findMany();
}

  const handleRefresh = () => {
    window.location.reload();
  };
async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({where: { id }, data: {complete }})
}
export default async function Home() {
  const todos = await getTodos();
  return (
    <div>
      <header className="mb-4 flex items-baseline justify-between">
        <h1 className="text-base sm:text-lg lg:text-xl">Todo List</h1>
        <Link
          className="rounded border-2 border-slate-300 px-3 py-1 text-slate-300 outline-none duration-500 focus-within:bg-slate-700 hover:bg-slate-700"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            createdAt={todo.createdAt.toDateString()}
            toggleTodo={toggleTodo}
            completed={todo.complete === true ? "true" : "false"}
          />
        ))}
      </ul>
    </div>
  );
}
