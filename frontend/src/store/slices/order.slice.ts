import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {orderService} from "../../services/order.service";
import {IDish} from "../../interfaces";


const initialState = {
    orders: [] as IDish[]
}

export const getAllOrders = createAsyncThunk(
    'order/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await orderService.getAllOrders();
            return data
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const saveOrderInDb = createAsyncThunk(
    'order/save',
    async (data: any, {dispatch, rejectWithValue}) => {
        try {
            const axiosResponse = await orderService.saveOrders(data);
            console.log(axiosResponse)
        } catch (e) {
            rejectWithValue(e)
        }
    }
)


export const createOrder = createAsyncThunk(
    'order/create',
    async (data: any, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setOrder(data))
        } catch (e) {
            rejectWithValue(e)
        }
    }
);

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.orders.push(action.payload)
            localStorage.setItem('order', JSON.stringify(state.orders))
            if (state.orders.length === 0) {
                const saveOrder = localStorage.getItem('order');
                state.orders = JSON.parse(saveOrder as string)
            }

        }
    },
    extraReducers: builder => {
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.orders = action.payload
        })
    }
});

const orderReducer = orderSlice.reducer;
export default orderReducer;

export const {
    setOrder,
} = orderSlice.actions;