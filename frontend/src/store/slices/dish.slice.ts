import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dishService } from '../../services/dish.service';
import { IDish } from '../../interfaces';

const initialState = {
    result: [] as IDish[],
    status: 'Loading',
    dish: [] as IDish[],
    item: 1
}

export const getAllDish = createAsyncThunk(
    'dish/all',
    async (_, {dispatch, getState}) => {
        try {
            const {data} = await dishService.getDish();
            return data
        } catch (e) {
            console.log(e);
        }

    });


export const getAllDishByLocalityId = createAsyncThunk(
  'auth/user',
  async (id: string, { dispatch, getState }) => {
    try {

      const { data } = await dishService.getDish();
      return data.filter((value) => value.localityId === Number(id));
    } catch (e) {
      console.log(e);
    }
  },
);

const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllDishByLocalityId.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(getAllDishByLocalityId.fulfilled, (state, action) => {
            state.status = "fulfilled";
            const item = localStorage.getItem("restaurantId")|| 1;
            if (action.payload) {
                state.result = action.payload.filter(value=>value.restaurantId===+item);
            }

        });
        builder.addCase(getAllDish.fulfilled, (state, action) => {
            if (action.payload) {
                state.dish = action.payload;
            }
        });
    }
})
const dishReducer = dishSlice.reducer;
export {dishReducer};
export const { } = dishSlice.actions;

