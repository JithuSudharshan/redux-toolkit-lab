const store = require("./app/store")
const { burgerActions } = require("./features/burger/burgerSlice")
const { pizzaActions } = require("./features/pizza/pizzaSlice")

console.log("initial state",store.getState())

const unSubscribe = store.subscribe(()=>{
    console.log("updated state: ",store.getState())
})

store.dispatch(pizzaActions.pizza_order());
store.dispatch(burgerActions.burger_order())

unSubscribe();