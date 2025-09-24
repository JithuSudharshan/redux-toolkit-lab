const { configureStore } = require("@reduxjs/toolkit");

const pizzaReducer = require("../features/pizza/pizzaSlice");
const burgerReducer = require("../features/burger/burgerSlice");
const { productReducer } = require("../features/products/productsSlice"); 

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productReducer
  }
});

module.exports = store;
