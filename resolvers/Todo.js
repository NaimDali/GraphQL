import { db } from "./../data/db.js"


export const Todo = {
    user : (todo) => {
        return db.users.find(user => user.id === todo.user);
    },
}