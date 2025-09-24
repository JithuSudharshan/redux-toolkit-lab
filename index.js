// Import the Redux store
// The store is the single source of truth for the app's state
const store = require("./app/store");

// Import action creators from the slice files
// These are functions that return action objects to dispatch
const { burgerActions } = require("./features/burger/burgerSlice");
const { pizzaActions } = require("./features/pizza/pizzaSlice");

// Log the initial state of the store
// Useful to see the state before any actions are dispatched
// console.log("initial state", store.getState());

// Subscribe to the store
// The callback function runs every time an action is dispatched
// and the state changes
const unSubscribe = store.subscribe(() => {
//   console.log("updated state: ", store.getState());
});

// Dispatch actions to update the state

// Dispatch the pizza_order action
// This will decrement pizzaBase by 1
store.dispatch(pizzaActions.pizza_order());
store.dispatch(pizzaActions.pizza_order());

// Dispatch the burger_order action
// This will decrement burgerBuns by 1
store.dispatch(burgerActions.burger_order());
store.dispatch(burgerActions.burger_order());

// Unsubscribe from the store
// Stops listening to state changes
unSubscribe();
