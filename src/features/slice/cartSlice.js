import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalquantity:0,
    totalamount:0,
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const index = state.items.findIndex(item=>item.id===action.payload.id)
            if(index>=0){
              state.items[index].quantity+=1;
            }else{
              const item = {...action.payload,quantity:1}
              state.items.push(item);
            }
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
          decreaseCart:(state,action)=>{
            const index = state.items.findIndex(item =>item.id===action.payload.id);
            if(state.items[index].quantity>1){
              state.items[index].quantity-=1;
            }else if(state.items[index].quantity===1){
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
            }
          },
          clearCart:(state,action)=>{
            state.items=[]
          },
          getTotal :(state,action)=>{
           const {total,quantity} = state.items.reduce((CartTotal,CartItems)=>{
                const {price,quantity} =CartItems;
                const ItemTotal=price*quantity;
                CartTotal.total+=ItemTotal;
                CartTotal.quantity+=quantity;

                return CartTotal;
            },
            {
              total:0,
              quantity:0
            });
            state.totalquantity=quantity;
            state.totalamount=total;
          }
    }
})

export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotal}  = cartSlice.actions; 

export const selectItem = (state) => state.cart.items;
export const selectTotal = (state) =>state.cart.items.reduce((total,item)=>total+item.price,0)
export default cartSlice.reducer;