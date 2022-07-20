import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {adminService} from "../../services/admin.service";
import {IDish, ILocality} from "../../interfaces";

const initialState = {
    result: [],
    accessToken: '',
    locality: [] as ILocality[],
    restaurant: [] as ILocality[],
    Dish: [] as IDish[],
    status: ''
}
export const getLocality = createAsyncThunk(
    'admin/AddDish',
    async (_, {dispatch, getState}) => {
        try {
            const state = getState() as { adminReducer: { locality: ILocality[] } };
            if (state.adminReducer.locality.length == 0) {
                await adminService.getLocality().then(value => dispatch(setLocalityData(value.data)))
            }
            if (state.adminReducer.locality.length > 0) {
                dispatch(setLocalityData(state.adminReducer.locality))
            }

        } catch (e) {
            console.log(e);
        }
    }
)
export const getRestaurant = createAsyncThunk(
    'admin/AddDish',
    async (_, {dispatch}) => {
        try {
            const {data} = await adminService.getRestaurant()
            if (data) {
                dispatch(setRestaurantData(data))
            }

        } catch (e) {
            console.log(e);
        }
    }
)

export const addRestaurant = createAsyncThunk(
    'admin/addRestaurant',
    async (data: any, {dispatch}) => {
        try {
            await adminService.addRestaurant(data);
        } catch (e) {
            console.log(e);
        }
    }
)
export const addLocality = createAsyncThunk(
    'admin/AddLocality',
    async (data: any, {dispatch}) => {
        try {
            await adminService.addLocality(data);
        } catch (e) {
            console.log(e);
        }
    }
)
export const addDish = createAsyncThunk(
    'admin/AddDish',
    async (data: any, {dispatch}) => {
        try {
            await adminService.addDish(data);
        } catch (e) {
            console.log(e);
        }
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setLocalityData: (state, action: PayloadAction<ILocality[]>) => {
            state.locality = action.payload;
        },
        setRestaurantData: (state, action: PayloadAction<ILocality[]>) => {
            state.restaurant = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLocality.pending, (state, action) => {
            state.status = "Loading";
        });
        builder.addCase(getLocality.fulfilled, (state, action) => {
            state.status = "fulfilled";
            // state.locality = action.payload.data;
        });
}
})
const adminReducer = adminSlice.reducer;
export default adminReducer;
export const {
    setLocalityData, setRestaurantData
} = adminSlice.actions