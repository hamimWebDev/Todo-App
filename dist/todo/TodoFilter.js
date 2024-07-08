"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const button_1 = require("@/components/ui/button");
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const TodoFilter = ({ priority, setPriority }) => {
    return (<dropdown_menu_1.DropdownMenu>
      <dropdown_menu_1.DropdownMenuTrigger asChild>
        <button_1.Button className="bg-gray-200 text-xl text-black hover:text-white font-semibold sm:mr-2" type="button">
          Filter
        </button_1.Button>
      </dropdown_menu_1.DropdownMenuTrigger>
      <dropdown_menu_1.DropdownMenuContent className="w-56">
        <dropdown_menu_1.DropdownMenuLabel>Panel Position</dropdown_menu_1.DropdownMenuLabel>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <dropdown_menu_1.DropdownMenuRadioItem value="high">High</dropdown_menu_1.DropdownMenuRadioItem>
          <dropdown_menu_1.DropdownMenuRadioItem value="medium">Medium</dropdown_menu_1.DropdownMenuRadioItem>
          <dropdown_menu_1.DropdownMenuRadioItem value="low">Low</dropdown_menu_1.DropdownMenuRadioItem>
          
        </dropdown_menu_1.DropdownMenuRadioGroup>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
};
exports.default = TodoFilter;
