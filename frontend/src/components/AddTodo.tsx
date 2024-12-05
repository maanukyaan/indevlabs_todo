import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const { toast } = useToast();

  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    } else {
      toast({ title: "😐 Task is empty", description: "Write something 😒" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 flex flex-col items-center justify-center"
    >
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="📝 Add a new task..."
        className="input input-bordered w-11/12 lg:w-1/2"
      />
      <Button type="submit" variant="default" className="mt-5">
        Add Task <Plus />
      </Button>
    </form>
  );
}
