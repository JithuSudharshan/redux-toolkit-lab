// Import createSlice from Redux Toolkit
// createSlice simplifies creating a Redux slice:
// - defines initial state
// - defines reducers (functions that update state)

const { pizzaActions } = require("../pizza/pizzaSlice");

// - automatically generates action creators
const createSlice = require("@reduxjs/toolkit").createSlice;

// Initial state for the burger slice
// This is the default state before any actions are dispatched
const initialState = {
  burgerBuns: 250, // total number of burger buns available
};

// Create the burger slice
// - name: a unique name for the slice (used as prefix in action types)
// - initialState: default state for this slice
// - reducers: object where keys are "action names" and values are reducer functions
//   Each reducer receives `state` and can mutate it directly thanks to Immer.js
const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    // Action to order a burger
    // Decreases the number of burger buns by 1
    burger_order: (state) => {
      state.burgerBuns--;
    }
  },
   extraReducers:(builder)=>{
        builder.addCase(pizzaActions.pizza_order,(state)=>{
            state.burgerBuns--;
        })
    }
});



// Export the reducer as default
// This will be used in store.js to handle the burger slice of state
module.exports = burgerSlice.reducer;

// Export the action creators as named exports
// These functions return the action objects to be dispatched
// Example usage: store.dispatch(burgerActions.burger_order())
module.exports.burgerActions = burgerSlice.actions;
