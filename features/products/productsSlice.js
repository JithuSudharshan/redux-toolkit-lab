const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  products: [],
  error: ""
};

const fetchProducts = createAsyncThunk("product/fetchProducts",() => {
  return axios.get("https://fakestoreapi.com/products")
    .then((res) => console.log(res.data))
});

const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

console.log(ProductSlice);

module.exports = {
  productReducer: ProductSlice.reducer,
  fetchProducts
};
