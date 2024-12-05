import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Array<{ id: number; text: string; completed: boolean }>;
  deleteTodo: (id: number, text: string) => void;
  toggleTodo: (id: number, text: string) => void;
}

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}: TodoListProps) {
  return (
    <div>
      {todos.length === 0 ? (
        <h2 className="mt-10 text-center font-title text-2xl font-bold">
          No tasks to show 😭
        </h2>
      ) : (
        <ul className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:flex-wrap">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
