import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const backendUrl = "http://localhost:3000";

export default function App() {
  const { toast } = useToast();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`${backendUrl}/todos`);
        if (!response.ok) throw new Error("Failed to fetch tasks");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        toast({
          title: "😱 Error",
          description: "📥 Could not load tasks. Please try again later.",
          variant: "destructive",
        });
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text: string) => {
    try {
      const newTodo = await fetch(`${backendUrl}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());

      toast({
        title: "⚡️ Task added successfully",
        description: text,
      });

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      toast({
        title: "🤕 Error",
        description: "➕ Could not add task. Please try again.",
        variant: "destructive",
      });
    }
  };

  const deleteTodo = async (id: number, text: string) => {
    try {
      await fetch(`${backendUrl}/todos/${id}`, { method: "DELETE" });
      toast({
        title: "😔 ✅ Task deleted successfully",
        description: text,
      });
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      toast({
        title: "🥲 Error",
        description: "🗑️ Could not delete task. Please try again.",
        variant: "destructive",
      });
    }
  };

  const toggleTodo = async (id: number, text: string) => {
    try {
      const todo = todos.find((t) => t.id === id);
      await fetch(`${backendUrl}/todos/${id}/toggle`, {
        method: "POST",
      });
      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.id === id ? { ...t, completed: !todo?.completed } : t
        )
      );
      toast({
        title: `${todo?.completed ? "🤨 You cancelled the completed task" : "🎉 You completed the task!"}`,
        description: text,
      });
    } catch (error) {
      toast({
        title: "🤒 Error",
        description: "👀 Could not toggle task status. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto h-full p-4 font-main">
      <Toaster />

      <h1 className="mb-10 mt-5 text-center font-title text-3xl font-bold md:text-5xl">
        Task WebApp 🪄
      </h1>

      <AddTodo addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
