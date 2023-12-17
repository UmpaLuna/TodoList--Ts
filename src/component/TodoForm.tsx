import * as St from "../styled-component/StTodoForm";
import useInput from "../hook/useInput";

function TodoForm() {
  const { onClickAddTodoHandler, onChangeHandler, form } = useInput();

  return (
    <St.Form
      onSubmit={(e) => {
        e.preventDefault();
        onClickAddTodoHandler(form);
      }}
    >
      <St.Div>
        <St.Label htmlFor="todo">할 일 :</St.Label>{" "}
        <St.Input id="todo" name="todo" onChange={onChangeHandler} />
        <St.Label htmlFor="content">내용 : </St.Label>{" "}
        <St.Input id="content" name="content" onChange={onChangeHandler}/>
      </St.Div>

      <St.Button>버튼</St.Button>
    </St.Form>
  );
}

export default TodoForm;
