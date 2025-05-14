import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTaskContext } from "../../context/TaskContext"

export function TaskForm() {
  const [open, setOpen] = useState(false)
  const taskRef = useRef(null)
  const { addTask } = useTaskContext()

  const handleSubmit = () => {
    const taskValue = taskRef.current?.value?.trim()
    if (taskValue) {
      addTask(taskValue)
      taskRef.current.value = ""
      setOpen(false) // Close the dialog
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="task">Task</Label>
          <Input
            id="task"
            placeholder="Task"
            ref={taskRef}
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
