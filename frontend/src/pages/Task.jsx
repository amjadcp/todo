import { TaskForm } from "../components/task/TaskForm";
import { Button } from "@/components/ui/button";
import { TaskProvider } from "../context/TaskContext";

const Task = () => {

  return (
    <TaskProvider>
    <div className="relative flex flex-col items-center justify-start min-h-screen px-4 py-6">
      <h1 className="text-2xl font-bold mb-10 text-center">To-Do List</h1>
      <div className="absolute top-6 right-20">
        <TaskForm />
      </div>
    </div>
    </TaskProvider>
  );
};

export default Task;
