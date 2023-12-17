import React from "react";
import TodoList from "../component/TodoList";
import * as St from "../styled-component/StLayout";
import TodoForm from "../component/TodoForm";
function TodoPage() {
  return (
    <St.Layout>
      <TodoForm />
      <TodoList />;
    </St.Layout>
  );
}

export default TodoPage;