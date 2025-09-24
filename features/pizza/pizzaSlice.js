// Import createSlice from Redux Toolkit
// createSlice simplifies creating a Redux slice:
// - defines initial state
// - defines reducers (functions that update state)
// - automatically generates action creators
const createSlice = require("@reduxjs/toolkit").createSlice;

// Initial state for the pizza slice
// This is the default state before any actions are dispatched
const initialState = {
  pizzaBase: 1000, // total number of pizza bases available
};

// Create the pizza slice
// - name: a unique name for the slice (used as prefix in action types)
// - initialState: default state for this slice
// - reducers: object where keys are "action names" and values are reducer functions
//   Each reducer receives `state` and can mutate it directly thanks to Immer.js
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    // Action to order a pizza
    // Decreases the number of pizza bases by 1
    pizza_order: (state) => {
      state.pizzaBase--;
    },
  },
});

// Optional: log the slice object to inspect structure (useful for learning)
console.log(pizzaSlice);

// Export the reducer as default
// This will be used in store.js to handle the pizza slice of state
module.exports = pizzaSlice.reducer; 

// Export the action creators as named exports
// These functions return the action objects to be dispatched
// Example usage: store.dispatch(pizzaActions.pizza_order())
module.exports.pizzaActions = pizzaSlice.actions;
