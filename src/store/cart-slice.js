import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  numOfItems: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.numOfItems = action.payload.numOfItems;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice += existingCartItem.price;
      } else {
        state.items.push({
          productId: action.payload.productId,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.changed = true;
      state.numOfItems++;
    },

    updateItem(state, action) {
      const { productId, amount } = action.payload;
      const updatedItem = state.items.find(
        (item) => item.productId === productId
      );
      updatedItem.quantity += amount;
      updatedItem.totalPrice += updatedItem.price * amount;

      if (updatedItem.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      state.changed = true;
      state.numOfItems += +amount;
    },
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice;
