import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const todosSlice = createSlice({
    name : 'todos',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            state.todos.push({
                id : nanoid(),
                text : action.payload,
                completed : false
            })
        },
        updateTodo : (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            todo.text = action.payload.text;
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleComplete : (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed;
        },
        resetAll : (state) => {
            state.todos = [];
        }
    }
})

export const {addTodo, updateTodo, deleteTodo, toggleComplete, resetAll } = todosSlice.actions 
export default todosSlice.reducer;