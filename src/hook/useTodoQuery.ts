import { useQuery } from "react-query";
import { getTodos } from "../api/todos";

function useTodoQuery() {
  // useQuery, 여기다 놓기

  const { data, isLoading } = useQuery("todos", getTodos, {
    refetchOnWindowFocus: false,
  });

  const doneList = data?.filter((todo) => todo.isDone);
  const currentList = data?.filter((todo) => !todo.isDone);

  return {
    currentList,
    doneList,
    isLoading,
  };
}

export default useTodoQuery;
