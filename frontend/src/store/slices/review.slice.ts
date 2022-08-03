import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IReview } from "../../interfaces";
import { reviewService } from "../../services/review.service";

interface IInitialState {
  reviews?: IReview[],
  status: string,
}
const initialState:IInitialState = {
  reviews: [],
  status: '',
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

export const CreateReview = createAsyncThunk<IReview | undefined,IReview>('reviewSlice/CreateReview', async(review) => {
  try{
    const {data} = await reviewService.CreateReview(review);
    return data;
  }catch (e) {
    return undefined;
  }
})

 const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllReviews.fulfilled, (state, action: PayloadAction<IReview[] | undefined>) => {
      state.reviews = action.payload;
    });
     builder.addCase(CreateReview.fulfilled, (state, action: PayloadAction<IReview| undefined>) => {
       action.payload && state.reviews &&  state.reviews.push(action.payload);
       state.status = 'created';
     });
  }
 });

const reviewReducer = reviewSlice.reducer;
export {reviewReducer};
