import React from "react";
import TodoCard from "./TodoCard";
import useTodoQuery from "../../hook/useTodoQuery";
function CompleteTodos() {
  const { doneList } = useTodoQuery();
  return (
    <React.Fragment>
      {doneList?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </React.Fragment>
  );
}

export default CompleteTodos;
