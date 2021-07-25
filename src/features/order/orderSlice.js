import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIngredients } from './orderAPI';

const initialState = {
  ingredients: [],
  status: 'idle',
  user: [],
  showModal: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const populateIngredients = createAsyncThunk(
  'order/getIngredients',
  async () => {
    // The value we return becomes the `fulfilled` action payload
    const result = await getIngredients();
    return result.items;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateQuantity: (state, action) => {
      const ingredient = action.payload.ingredient;
      const quantity = action.payload.quantity;

      if (ingredient === undefined || quantity === undefined) return;

      const index = state.ingredients.findIndex(
        (item) => item.name === ingredient
      );

      state.ingredients[index].quantity = quantity;
    },
    resetOrder: (state) => {
      state.ingredients = state.ingredients.map((item) => {
        delete item.quantity;
        return item;
      });
      state.user = [];
      state.showModal = false;
    },
    setUserDetails: (state, action) => {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
        note: action.payload.note,
      };
    },
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(populateIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(populateIngredients.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ingredients = action.payload;
      });
  },
});

export const { updateQuantity, resetOrder, setUserDetails, toggleModal } =
  orderSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIngredients = (state) => state.order.ingredients;
export const selectUser = (state) => state.order.user;
export const selectStatus = (state) => state.order.status;
export const selectShowModal = (state) => state.order.showModal;

export default orderSlice.reducer;