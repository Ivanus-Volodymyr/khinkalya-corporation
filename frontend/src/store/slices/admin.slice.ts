import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminService } from '../../services/admin.service';
import { IDish, ILocality } from '../../interfaces';
import { IPromotion } from '../../interfaces/promotion.interface';

const initialState = {
  result: [],
  accessToken: '',
  locality: [] as ILocality[],
  Dish: [] as IDish[],
  status: '',
  promotion: [] as IPromotion[],
};
export const getLocality = createAsyncThunk(
  'admin/AddDish',
  async (_, { dispatch, getState }) => {
    try {
      const state = getState() as { adminReducer: { locality: ILocality[] } };
      if (state.adminReducer.locality.length === 0) {
        await adminService
          .getLocality()
          .then((value) => dispatch(setLocalityData(value.data)));
      }
      if (state.adminReducer.locality.length > 0) {
        dispatch(setLocalityData(state.adminReducer.locality));
      }
    } catch (e) {
      console.log(e);
    }
  },
);

export const getPromotions = createAsyncThunk(
  'admin/getPromotion',
  async (_void, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await adminService.getPromotions();
      return data;
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const addRestaurant = createAsyncThunk(
  'admin/addRestaurant',
  async (data: FormData, { dispatch }) => {
    try {
      await adminService.addRestaurant(data);
    } catch (e) {
      console.log(e);
    }
  },
);
export const addLocality = createAsyncThunk(
  'admin/AddLocality',
  async (data: FormData, { dispatch }) => {
    try {
      await adminService.addLocality(data);
    } catch (e) {
      console.log(e);
    }
  },
);
export const addDish = createAsyncThunk(
  'admin/AddDish',
  async (data: FormData, { dispatch }) => {
    try {
      await adminService.addDish(data);
    } catch (e) {
      console.log(e);
    }
  },
);
export const addPromotion = createAsyncThunk(
  'admin/AddPromotion',
  async (data: FormData, { rejectWithValue }) => {
    try {
      await adminService.addPromotion(data);
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setLocalityData: (state, action: PayloadAction<ILocality[]>) => {
      state.locality = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocality.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(getLocality.fulfilled, (state, action) => {
      state.status = 'fulfilled';
    });
    builder.addCase(getPromotions.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(getPromotions.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.promotion = action.payload as IPromotion[];
    });
  },
});
const adminReducer = adminSlice.reducer;
export { adminReducer };
export const { setLocalityData } = adminSlice.actions;
