import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    okTodos: []
}

const okTodosSlice = createSlice({
    name: 'okTodos',
    initialState,
    reducers:{
        addToOkTodos:(state, action) =>{
            state.okTodos.push(action.payload)
        },
        removeOkTodos:(state,action)=>{
            state.okTodos=[]
        }
    }
})

export const {addToOkTodos, removeOkTodos} = okTodosSlice.actions
export default okTodosSlice.reducer