/*
    Why are we createing index.js ?

    Ans : In most situations we are importing all the info in one place and fi someone / compoenet wants 
    something they take it from here .

*/

// import { TodoContext, TodoProvider ,useTodo } 


export {TodoContext,TodoProvider,useTodo} from "./TodoContext"

// If we had not written it like this then then I had to export each and every functionality from the 
// TodoContext like export addTodo , export updateTodo