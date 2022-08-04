import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IReview } from "../../interfaces";
import { reviewService } from "../../services/review.service";

interface IInitialState {
  reviews?: IReview[],
  status: string,
  isReviewActive: boolean,
  reviewBody: string,
}
const initialState:IInitialState = {
  reviews: [],
  status: '',
  isReviewActive: false,
  reviewBody: '',
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

export const CreateReview = createAsyncThunk('reviewSlice/CreateReview', async(review: IReview) => {
  try{
    const data = await reviewService.CreateReview(review);
    return data;
  }catch (e) {
    return undefined;
  }
})

 const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviewActive: (state) => {
    state.isReviewActive = !state.isReviewActive;
   },
    setReviewBody: (state, action:PayloadAction<string>) => {
      state.reviewBody += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllReviews.fulfilled, (state, action: PayloadAction<IReview[] | undefined>) => {
      state.reviews = action.payload;
    });
     builder.addCase(CreateReview.fulfilled, (state, action) => {
       const review = action.payload;
       review  && state.reviews &&  state.reviews.push(review);
       state.status = 'created';
       state.isReviewActive = false;
     });
  }
 });

const reviewReducer = reviewSlice.reducer;
export const{ setReviewActive, setReviewBody} = reviewSlice.actions;
export {reviewReducer};
