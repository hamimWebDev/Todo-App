import React from "react";
import Container from "../components/ui/Container";
import TodoContainer from "../todo/TodoContainer";

const Todo: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center font-semibold text-3xl mb-10">
        <button>My Todos</button>
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
