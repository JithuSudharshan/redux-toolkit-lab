const store = require("./app/store");
const { burgerActions } = require("./features/burger/burgerSlice");
const { pizzaActions } = require("./features/pizza/pizzaSlice");
const { fetchProducts } = require("./features/products/productsSlice");

console.log("intial state",store.getState())
// Subscribe to state changes
const unSubscribe = store.subscribe(() => {
  console.log("updated state: ", resultAction.type);
}); 

// Dispatch async thunk
store.dispatch(fetchProducts()).then(()=>{
    console.log("updated state:",store.getState())
})

// Optional: dispatch other actions
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerActions.burger_order());

unSubscribe();
