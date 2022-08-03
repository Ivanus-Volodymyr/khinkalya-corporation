import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IReview } from "../../interfaces";
import { reviewService } from "../../services/review.service";

interface IInitialState {
  reviews?: IReview[]
}
const initialState:IInitialState = {
  reviews: [],
}

export const GetAllReviews = createAsyncThunk<IReview[]| undefined, void>('reviewSlice/GetAllReviews',
  async() => {
  try{
    const {data} = await reviewService.GetAllReviews();
    return data;
  }catch (e) {
    return undefined;
  }
});

 const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllReviews.fulfilled, (state, action: PayloadAction<IReview[] | undefined>) => {
      state.reviews = action.payload;
    });
  }
 });

const reviewReducer = reviewSlice.reducer;
export {reviewReducer};
