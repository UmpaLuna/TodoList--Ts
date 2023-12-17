import React from "react";
import TodoCard from "./TodoCard";
import useTodoQuery from "../../hook/useTodoQuery";

function CurrentTodos() {
  const { currentList } = useTodoQuery();

  return (
    <>
      {currentList?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default CurrentTodos;
