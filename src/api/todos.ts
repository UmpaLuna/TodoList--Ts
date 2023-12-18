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

const getTodos = async ():Promise<TodoType[]> => {
  const { data } = await instance.get("/todos");
  return data;
};

const addTodo = async (newTodo:TodoType):Promise<void> => {
  await instance.post("/todos", newTodo);
};

const updateTodo = async (todo:TodoType):Promise<void> => {
  return await instance.patch(`/todos/${todo.id}`, {
    ...todo,
    isDone: !todo.isDone,
  });
};

const deleteTodo = async (id:number):Promise<void> => {
  return await instance.delete(`/todos/${id}`);
};
export { getTodos, addTodo, updateTodo, deleteTodo };
