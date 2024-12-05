import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
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
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="📝 Add a new task..."
        className="input input-bordered w-full"
      />
      <Button type="submit" className="mt-2">
        Add Task ➕
      </Button>
    </form>
  );
};

export default AddTodo;
