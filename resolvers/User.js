import { db } from "../data/db.js"


export const User = {
    todos: (user) => {
        return db.todos.filter(todo => todo.user === user.id);
    }
}