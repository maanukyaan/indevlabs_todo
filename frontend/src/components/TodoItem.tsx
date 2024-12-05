import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { memo, useState } from "react";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  deleteTodo: (id: number, text: string) => void;
  toggleTodo: (id: number, text: string) => void;
}

const areEqual = (prevProps: TodoItemProps, nextProps: TodoItemProps) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.text === nextProps.todo.text &&
    prevProps.todo.completed === nextProps.todo.completed
  );
};

const TodoItem = ({ todo, deleteTodo, toggleTodo }: TodoItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex w-full items-center justify-between rounded-xl border bg-white p-5 shadow dark:bg-light lg:w-[49%]">
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id, todo.text)}
          className="mr-3"
          id={String(todo.id)}
        />
        <label
          htmlFor={String(todo.id)}
          className={`${todo.completed ? "line-through" : ""} text-dark`}
        >
          {todo.text}
        </label>
      </div>
      <Button onClick={() => setOpen(true)} className="ml-4">
        Delete
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogTitle>
            Are you sure you want to delete this task? 😖
          </AlertDialogTitle>
          <p>
            <span className="text-dark text-opacity-60">{todo.text}</span>
          </p>
          <AlertDialogAction onClick={() => deleteTodo(todo.id, todo.text)}>
            Yes, Delete 👿
          </AlertDialogAction>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            No. Give a chance 🥹
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  );
};

export default memo(TodoItem, areEqual);
