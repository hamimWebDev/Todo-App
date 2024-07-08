import TodoCard, { TItem } from "./TodoCard";
import AddTodoModel from "./AddTodoModel";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (todos?.data?.length === 0) {
    return (
      <div>
        <div className="flex justify-between mb-5">
          <AddTodoModel />
          <TodoFilter priority={priority} setPriority={setPriority} />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
          <div
            className="bg-white p-5 text-2xl flex justify-center
           items-center rounded-md font-bold"
          >
            <p>There is no task! Please add task.</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex justify-between mb-5">
          <AddTodoModel />
          <TodoFilter priority={priority} setPriority={setPriority} />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
          <div
            className="bg-white p-5 w-full h-full rounded-lg
           space-y-3 "
          >
            {todos?.data?.map((item: TItem) => (
              <TodoCard key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TodoContainer;
