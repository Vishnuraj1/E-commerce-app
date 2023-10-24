import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './ReduxCart'

export const store = configureStore({
    reducer:{
       carts:cartreducer,
    }
})