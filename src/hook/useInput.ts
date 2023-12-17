import React, { ChangeEvent, useState } from "react";
import useTodoMutation from "./useTodoMutation";

function useInput() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    isDone:false
  });
  const { onClickAddTodoHandler } = useTodoMutation();

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { onChangeHandler, onClickAddTodoHandler, form };
}

export default useInput;
