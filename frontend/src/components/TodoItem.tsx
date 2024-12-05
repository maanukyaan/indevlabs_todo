import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  deleteTodo: (id: number, text: string) => void;
  toggleTodo: (id: number, text: string) => void;
}

export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
}: TodoItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex w-[49%] items-center justify-between rounded-xl bg-gray-100 p-5">
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id, todo.text)}
          className="mr-3"
          id={String(todo.id)}
        />
        <label
          htmlFor={String(todo.id)}
          className={todo.completed ? "line-through" : ""}
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
            <span className="text-gray-500">{todo.text}</span>
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
}
