"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("@/components/ui/Container"));
const TodoContainer_1 = __importDefault(require("@/todo/TodoContainer"));
const Todo = () => {
    return (<Container_1.default>
      <h1 className="text-center font-semibold text-3xl mb-10">
        <button>My Todos</button>
      </h1>
      <TodoContainer_1.default />
    </Container_1.default>);
};
exports.default = Todo;
