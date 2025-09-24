// Import configureStore function from Redux Toolkit
// configureStore is a wrapper around Redux's createStore that sets up
// the store with good defaults (like redux-thunk middleware, devTools, etc.)
const configureStore = require("@reduxjs/toolkit").configureStore;

// Import reducers from feature slices
// Each slice manages a specific piece of the app's state
const pizzaReducer = require("../features/pizza/pizzaSlice");
const burgerReducer = require("../features/burger/burgerSlice");

// Create the Redux store
// - The store holds the entire state tree of the application
// - The reducer option takes an object of slice reducers
//   Each key becomes a "state field" in the store
//   Example: state.pizza will be managed by pizzaReducer
//            state.burger will be managed by burgerReducer
const store = configureStore({
  reducer: {
    pizza: pizzaReducer,   // state.pizza handled by pizzaReducer
    burger: burgerReducer, // state.burger handled by burgerReducer
  },
});

// Export the store so it can be imported and used in index.js or React components
module.exports = store;
