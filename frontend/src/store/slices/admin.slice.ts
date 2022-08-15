import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminService } from "../../services/admin.service";
import { IDish } from "../../interfaces";

const initialState = {
  result: [],
  Dish: [] as IDish[],
};


export const addRestaurant = createAsyncThunk(
  "admin/addRestaurant",
  async (data: FormData, { dispatch }) => {
    try {
      await adminService.addRestaurant(data);
    } catch (e) {
      console.log(e);
    }
  }
);
export const addLocality = createAsyncThunk(
  "admin/AddLocality",
  async (data: FormData, { dispatch }) => {
    try {
      await adminService.addLocality(data);
    } catch (e) {
      console.log(e);
    }
  }
);
export const addDish = createAsyncThunk(
  "admin/AddDish",
  async (data: FormData, { dispatch }) => {
    try {
      await adminService.addDish(data);
    } catch (e) {
      console.log(e);
    }
  }
);
export const addPromotion = createAsyncThunk(
  "admin/AddPromotion",
  async (data: FormData, { rejectWithValue }) => {
    try {
      await adminService.addPromotion(data);
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {}
});
const adminReducer = adminSlice.reducer;
export { adminReducer };
