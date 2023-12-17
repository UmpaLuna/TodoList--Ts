import { useMutation, useQueryClient } from "react-query";
import { TodoType, addTodo, deleteTodo, updateTodo } from "../api/todos";

function useTodoMutation() {
  //useMutation만
  const queryClient = useQueryClient();

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const onClickAddTodoHandler = (form:Omit<TodoType,'id'>) => {
    const newTodo = {
      id: Date.now(),
      title: form.title,
      content: form.content,
      isDone: false,
    };

    addMutation.mutate(newTodo);
  };
  return {
    addMutation,
    deleteMutation,
    updateMutation,
    onClickAddTodoHandler,
  };
}

export default useTodoMutation;
