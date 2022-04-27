import { v4 as uuidv4 } from "uuid";
import { Query } from "./Query";

export const Mutation = {
  addTodo: (parent, { addTodoInput }, { db }, info) => {
    const user = Query.getUser(addTodoInput.userId);
    if (user) {
      const newTodo = {
        id: uuidv4(),
        status: TodoStatus.WAITING,
        ...addTodoInput,
      };
      db.todos.push(newTodo);
      return newTodo;
    } else throw "user not found.";
  },
  updateTodo: (parent, { id, modifyTodoInput }, { db }, info) => {
    if (modifyTodoInput.userId) {
      const user = Query.getUser(modifyTodoInput.userId);
      if (user) {
        const Todo = { id: id, ...modifyTodoInput };
        const todoIndex = db.todos.findIndex((todo) => todo.id == id);
        db.todos[todoIndex] = Todo;
        return Todo;
      } else throw "User not found.";
    } else throw "User Id input field can't be empty.";
  },
  deleteTodo: (parent, { id }, { db }, info) => {
    const Todo = Query.getTodo(id);
    if (Todo) {
      db.todos = db.todos.filter((todo) => todo.id != id);
      return Todo;
    } else throw "Todo not found";
  },
};
