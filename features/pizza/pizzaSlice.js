import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaBase:1000
}

const pizzaSlice = createSlice({
    name:"pizza",
    initialState,
    reducers:{
        pizza_order:(state,action)=>{
        state.pizzaBase--;
    }
    }
})

console.log(pizzaSlice)
module.exports = pizzaSlice.reducer; //deafault export
module.exports.pizzaActions = pizzaSlice.actions; //Named export