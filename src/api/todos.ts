import axios from "axios";


export interface TodoType{
      id:number
      title: string
      content :string
      isDone:boolean
}

export interface PropsTodo{
  todo : TodoType
}
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const getTodos = async () => {
  const { data } = await instance.get<TodoType[]>("/todos");
  
  return data;
};

const addTodo = async (newTodo:TodoType) => {
  await instance.post("/todos", newTodo);
};

const updateTodo = async (todo:TodoType) => {
  return await instance.patch(`/todos/${todo.id}`, {
    ...todo,
    isDone: !todo.isDone,
  });
};

const deleteTodo = async (id:Pick<TodoType,'id'>) => {
  return await instance.delete(`/todos/${id}`);
};
export { getTodos, addTodo, updateTodo, deleteTodo };
