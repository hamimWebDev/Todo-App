"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const dialog_1 = require("@/components/ui/dialog");
const input_1 = require("@/components/ui/input");
const select_1 = require("@/components/ui/select");
const api_1 = require("@/redux/api/api");
const react_dialog_1 = require("@radix-ui/react-dialog");
const react_label_1 = require("@radix-ui/react-label");
const react_1 = require("react");
const UpdateTodoModel = ({ title, description, _id, priority }) => {
    const [isDialogOpen, setIsDialogOpen] = (0, react_1.useState)(false);
    const [setUpdateDetails, { isLoading }] = (0, api_1.useUpdateTodoMutation)();
    const [UPriority, setPriority] = (0, react_1.useState)("");
    const [UTask, setTask] = (0, react_1.useState)("");
    const [UDescription, setDescription] = (0, react_1.useState)("");
    const updateSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const updateData = {};
        if (UTask === "") {
            updateData.title = title;
        }
        else {
            updateData.title = UTask;
        }
        if (UDescription === "") {
            updateData.description = description;
        }
        else {
            updateData.description = UDescription;
        }
        if (UPriority === "") {
            updateData.priority = priority;
        }
        else {
            updateData.priority = UPriority;
        }
        console.log({ UTask, UDescription, UPriority });
        if (Object.keys(updateData).length > 0) {
            const options = {
                id: _id,
                data: updateData,
            };
            yield setUpdateDetails(options);
            setIsDialogOpen(false); // Close the dialog
        }
    });
    return (<dialog_1.Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <dialog_1.DialogTrigger asChild>
        <button_1.Button className="bg-[#5C53FE]" type="button">
          <svg className="size-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
          </svg>
        </button_1.Button>
      </dialog_1.DialogTrigger>
      <dialog_1.DialogContent className="sm:max-w-[425px]">
        <dialog_1.DialogHeader>
          <dialog_1.DialogTitle>Update task</dialog_1.DialogTitle>
          <react_dialog_1.DialogDescription>
            Update your task that you want to finish.
          </react_dialog_1.DialogDescription>
        </dialog_1.DialogHeader>
        <form onSubmit={updateSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <react_label_1.Label htmlFor="task" className="text-right">
              Task
            </react_label_1.Label>
            <input_1.Input onChange={(e) => setTask(e.target.value)} id="task" name="task" className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <react_label_1.Label htmlFor="description" className="text-right">
              Description
            </react_label_1.Label>
            <input_1.Input onChange={(e) => setDescription(e.target.value)} id="description" name="description" className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <react_label_1.Label className="text-right font-semibold">Priority :</react_label_1.Label>
            <select_1.Select onValueChange={(value) => setPriority(value)}>
              <select_1.SelectTrigger className="col-span-3">
                <select_1.SelectValue placeholder="Select a priority"/>
              </select_1.SelectTrigger>
              <select_1.SelectContent>
                <select_1.SelectGroup>
                  <select_1.SelectItem value="high">High</select_1.SelectItem>
                  <select_1.SelectItem value="medium">Medium</select_1.SelectItem>
                  <select_1.SelectItem value="low">Low</select_1.SelectItem>
                </select_1.SelectGroup>
              </select_1.SelectContent>
            </select_1.Select>
          </div>
          <dialog_1.DialogFooter>
            <button_1.Button type="submit" disabled={isLoading}>Update Todo</button_1.Button>
          </dialog_1.DialogFooter>
        </form>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.default = UpdateTodoModel;
