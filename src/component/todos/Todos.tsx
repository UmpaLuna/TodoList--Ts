import React from "react";
import * as St from "../../styled-component/StTodoList";
import CurrentTodos from "./CurrentTodos";
import CompleteTodos from "./CompleteTodos";

function Todos() {
  return (
    <St.Container>
      <St.Section>
        <St.Title>Working🎈</St.Title>
        <St.Div>
          
          <CurrentTodos />

        </St.Div>
      </St.Section>
      <St.Section>
        <St.Title>Done 👍</St.Title>
        <St.Div>

          <CompleteTodos />

        </St.Div>
      </St.Section>
    </St.Container>
  );
}

export default Todos;
