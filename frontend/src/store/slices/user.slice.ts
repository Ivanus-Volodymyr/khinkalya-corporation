import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services/user.service";
import {IUser} from "../../interfaces";

const initialState = {
    status: '',
    user: {} as IUser,
    allUser: [] as IUser[]
}

export const getAll = createAsyncThunk(
    'auth/user',
    async (_, {dispatch, getState}) => {
        try {
            const {data} = await userService.getAllUsers();
            return data

        } catch (e) {
            console.log(e);
        }

    });


export const getUserById = createAsyncThunk(
    'userById',
    async (id: string, {dispatch, getState}) => {
        try {
            const {data} = await userService.getUserById(id);
            return data
        } catch (e) {
            console.log(e);
        }

    });


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserById.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.status = "fulfilled";
            if (action.payload)
                state.user = action.payload
        });
        builder.addCase(getAll.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.status = "fulfilled";
            if (action.payload)
                state.allUser = action.payload as IUser[]
        });
    }
})
const userReducer = userSlice.reducer;
export default userReducer