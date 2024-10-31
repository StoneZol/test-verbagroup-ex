import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    basket: []
}


const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addToBasket: (state, action)=>{
            state.basket.push(action.payload)
        },
        removeBasket:(state, action)=>{
            state.basket = []
        }
        
    }
})

export const {addToBasket, removeBasket} = basketSlice.actions
export default basketSlice.reducer