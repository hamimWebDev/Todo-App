import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddTodoMutation } from "@/redux/api/api";

import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { FormEvent, useState } from "react";

const AddTodoModel = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // for local state
  // const dispatch = useAppDispatch();

  // for server

  const [addTodo] = useAddTodoMutation();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task && description) {
      const taskDetails = {
        title: task,
        isCompleted: false,
        description,
        priority,
      };
      // for local state
      // dispatch(addTodo(taskDetails));

      // for server
      addTodo(taskDetails);

      setIsDialogOpen(false); // Close the dialog only if the form is valid
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-primary-gradient text-xl font-semibold sm: ml-2"
          type="button"
          onClick={() => setIsDialogOpen(true)}
        >
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right font-semibold">
              Task :
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="task"
              required
              name="task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="description"
              className="text-right font-semibold text-sm"
            >
              Description :
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              required
              name="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right font-semibold">Priority :</Label>
            <Select required onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit">Add Todo</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModel;
