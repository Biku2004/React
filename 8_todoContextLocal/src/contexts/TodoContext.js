import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo : [
        {
            id : 1,
            todo : "todo message",
            completed : false 
        }
    ],
    // Here we write the only the name of the functionalities and the other details of the functionality
    // are written App.jsx

    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

