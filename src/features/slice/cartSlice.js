import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.items = [...state.items,action.payload];
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex((basketItem) => basketItem.id===action.payload.id
            );
            let newBasket = [...state.items];
            if(index>=0){
                newBasket.splice(index,1);
            }else{
              console.warn(
                "can not find the item"
              );
            }
            state.items= newBasket
          },
    }
})

export const {addToCart,removeFromCart}  = cartSlice.actions; 

export const selectItem = (state) => state.cart.items;
export default cartSlice.reducer