import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    auth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state,action)=>{
            if (action.payload.name==='admin' && action.payload.password==='admin'){
                state.auth = true
            }
            else state.auth =false
        },
        logout: (state, action)=>{
            state.auth= false
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer