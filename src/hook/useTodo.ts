
import {  TodoType} from "../api/todos";
import useTodoMutation from "./useTodoMutation";

function useTodo() {
  const { updateMutation, deleteMutation } = useTodoMutation();

  const onClickIsDoneHandler = (todo:TodoType) => () => updateMutation.mutate(todo);
  const onClickDeleteHandler = (id:Pick<TodoType,'id'>) => () => deleteMutation.mutate(id);
  
  return {
    onClickDeleteHandler,
    onClickIsDoneHandler,
  };
}

export default useTodo;
