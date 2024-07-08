"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const dialog_1 = require("@/components/ui/dialog");
const input_1 = require("@/components/ui/input");
const select_1 = require("@/components/ui/select");
const api_1 = require("@/redux/api/api");
const react_dialog_1 = require("@radix-ui/react-dialog");
const react_label_1 = require("@radix-ui/react-label");
const react_1 = require("react");
const AddTodoModel = () => {
    const [task, setTask] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [priority, setPriority] = (0, react_1.useState)("");
    const [isDialogOpen, setIsDialogOpen] = (0, react_1.useState)(false);
    // for local state
    // const dispatch = useAppDispatch();
    // for server
    const [addTodo] = (0, api_1.useAddTodoMutation)();
    const onSubmit = (e) => {
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
    return (<dialog_1.Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <dialog_1.DialogTrigger asChild>
        <button_1.Button className="bg-primary-gradient text-xl font-semibold sm: ml-2" type="button" onClick={() => setIsDialogOpen(true)}>
          Add todo
        </button_1.Button>
      </dialog_1.DialogTrigger>
      <dialog_1.DialogContent className="sm:max-w-[425px]">
        <dialog_1.DialogHeader>
          <dialog_1.DialogTitle>Add task</dialog_1.DialogTitle>
          <react_dialog_1.DialogDescription>
            Add your task that you want to finish.
          </react_dialog_1.DialogDescription>
        </dialog_1.DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <react_label_1.Label htmlFor="task" className="text-right font-semibold">
              Task :
            </react_label_1.Label>
            <input_1.Input onBlur={(e) => setTask(e.target.value)} id="task" required name="task" className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <react_label_1.Label htmlFor="description" className="text-right font-semibold text-sm">
              Description :
            </react_label_1.Label>
            <input_1.Input onBlur={(e) => setDescription(e.target.value)} id="description" required name="description" className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <react_label_1.Label className="text-right font-semibold">Priority :</react_label_1.Label>
            <select_1.Select required onValueChange={(value) => setPriority(value)}>
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
            <button_1.Button type="submit">Add Todo</button_1.Button>
          </dialog_1.DialogFooter>
        </form>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.default = AddTodoModel;
