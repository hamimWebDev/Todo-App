"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const store_1 = require("./redux/store");
const Todo_1 = __importDefault(require("./pages/Todo"));
function App() {
    return (<div>
      <react_redux_1.Provider store={store_1.store}>
        <Todo_1.default></Todo_1.default>
      </react_redux_1.Provider>
    </div>);
}
exports.default = App;
