import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { FormEvent, useState } from "react";
import { TItem } from "./TodoCard";
import { useUpdateTodoMutation } from "../redux/api/api";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const UpdateTodoModel = ({ title, description, _id, priority }: TItem) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [setUpdateDetails, { isLoading }] = useUpdateTodoMutation();
  const [UPriority, setPriority] = useState("");
  const [UTask, setTask] = useState("");
  const [UDescription, setDescription] = useState("");

  const updateSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const updateData: {
      title?: string;
      description?: string;
      priority?: string;
    } = {};
    if (UTask === "") {
      updateData.title = title;
    } else {
      updateData.title = UTask;
    }
    if (UDescription === "") {
      updateData.description = description;
    } else {
      updateData.description = UDescription;
    }
    if (UPriority === "") {
      updateData.priority = priority;
    } else {
      updateData.priority = UPriority;
    }

    console.log({ UTask, UDescription, UPriority });

    if (Object.keys(updateData).length > 0) {
      const options = {
        id: _id,
        data: updateData,
      };

      await setUpdateDetails(options);
      setIsDialogOpen(false); // Close the dialog
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#5C53FE]" type="button">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update task</DialogTitle>
          <DialogDescription>
            Update your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={updateSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              onChange={(e) => setTask(e.target.value)}
              id="task"
              name="task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right font-semibold">Priority :</Label>
            <Select onValueChange={(value) => setPriority(value)}>
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
            <Button type="submit" disabled={isLoading}>
              Update Todo
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModel;
