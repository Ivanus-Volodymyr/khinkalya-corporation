import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IReview } from "../../interfaces";
import { getLocality } from "./admin.slice";

interface IInitialState {
  reviews: IReview[]
}
const initialState:IInitialState = {
  reviews: [],

}

export const GetAllReviews = createAsyncThunk<IReview[], void>('reviewSlice/GetAllReviews',
  async() => {
  const response =
})

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  builder.addCase(GetAllReviews.fulfilled, (state, action) => {
    state.reviews = action.payload
  });
});

const reviewReducer = reviewSlice.reducer;
export {reviewReducer};
