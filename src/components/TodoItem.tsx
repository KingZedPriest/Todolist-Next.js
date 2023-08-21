"use client";
import { useState, useEffect } from "react";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: any;
  completed: string;
  toggleTodo: (id: string, complete: boolean) => void;
};
export default function TodoItem({
  id,
  title,
  complete,
  createdAt,
  toggleTodo,
  completed,
}: TodoItemProps) {
  //Window Refresh
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <li className="flex items-baseline justify-between">
      <div className="flex items-center gap-1">
        <input
          id={id}
          type="checkbox"
          className="peer cursor-pointer"
          defaultChecked={complete}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
          onClick={handleRefresh}
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-sm peer-checked:text-slate-500 peer-checked:line-through sm:text-base"
        >
          {title}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <p className="mt-1 text-[0.5rem] capitalize text-slate-400 sm:text-xs">
          Completed:{" "}
          <span className="font-bold text-red-400">
            {completed}
          </span>
        </p>
        <p className="mt-1 text-[0.5rem] text-slate-400 sm:text-xs">
          {createdAt}
        </p>
      </div>
    </li>
  );
}
