import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xl">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => {
              onTaskClick(task.id);
            }}
            className={`bg-slate-300 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-300 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className="bg-slate-300 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
