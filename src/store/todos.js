import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action)=> {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                section: 'new',
                status: 'pending'
            })
        },
        removeTodo:(state, action)=>{
            state.todos= state.todos.filter(todo=> todo.id !== action.payload.id)
        },
        removeAllTodo: (state, action) => {
            state.todos = [];
        }
    }

})

export const {addTodo, removeTodo, removeAllTodo} = todosSlice.actions;
export default todosSlice.reducer