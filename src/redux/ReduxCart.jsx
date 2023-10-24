import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE ={
    cartList:[],
    cartCount:0,
}

const cartSlice = createSlice({
    name:"carts",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
        const itemExist = state.cartList.find( (item) => item.id === action.payload.id)
          if(itemExist){
            // count increment logic 
            state.cartList.forEach( item=> {
                if(item?.id === action.payload.id){
                    item.count = 1;
                }
            })
            return;
          }
            //  updating cartlist array 
              state.cartList.push({
                  ...action.payload,
                  count:1,
              })
          
        },
        removeFromCart:(state,action)=>{
            const productId =action.payload;
            state.cartList = state.cartList.filter(item=>item?.id !== productId)
        },
        increment:(state,action)=>{
            const productId = action.payload;
            state.cartList.forEach( item=> {
                if(item?.id === productId){
                    item.count++;
                }
            })
        },
        decrement:(state,action)=>{
            const productId = action.payload;
            state.cartList.forEach( item=> {
                if(item?.id === productId){
                    item.count--;
                    state.cartList = state.cartList.filter(item=>item?.id !== productId)
                }
            })
        },
    }
})

export const {increment,decrement,addToCart,removeFromCart} =cartSlice.actions;

export default cartSlice.reducer;