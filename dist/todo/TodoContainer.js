"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCard_1 = __importDefault(require("./TodoCard"));
const AddTodoModel_1 = __importDefault(require("./AddTodoModel"));
const TodoFilter_1 = __importDefault(require("./TodoFilter"));
const api_1 = require("@/redux/api/api");
const react_1 = require("react");
const TodoContainer = () => {
    // from local state
    // const { todos } = useAppSelector((state) => state.todos);
    var _a, _b;
    const [priority, setPriority] = (0, react_1.useState)("");
    // from server
    const { data: todos, isLoading } = (0, api_1.useGetTodosQuery)(priority);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (((_a = todos === null || todos === void 0 ? void 0 : todos.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        return (<div>
        <div className="flex justify-between mb-5">
          <AddTodoModel_1.default />
          <TodoFilter_1.default priority={priority} setPriority={setPriority}/>
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
          <div className="bg-white p-5 text-2xl flex justify-center
           items-center rounded-md font-bold">
            <p>There is no task! Please add task.</p>
          </div>
        </div>
      </div>);
    }
    else {
        return (<div>
        <div className="flex justify-between mb-5">
          <AddTodoModel_1.default />
          <TodoFilter_1.default priority={priority} setPriority={setPriority}/>
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
          <div className="bg-white p-5 w-full h-full rounded-lg
           space-y-3 ">
            {(_b = todos === null || todos === void 0 ? void 0 : todos.data) === null || _b === void 0 ? void 0 : _b.map((item) => (<TodoCard_1.default key={item._id} {...item}/>))}
          </div>
        </div>
      </div>);
    }
};
exports.default = TodoContainer;
