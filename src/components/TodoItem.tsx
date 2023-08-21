type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};
export default function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-1">
      <input id={id} type="checkbox" className="peer cursor-pointer" />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
}
