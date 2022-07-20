import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {authService} from "../../services/auth.service";
import {userService} from "../../services/user.service";
import {decodeToken} from "react-jwt";
import {getAllDishByLocalityId} from "./dish.slice";

const initialState = {
    result: [],
    accessToken: '',
    isLog: false,
    refreshToken: '',
    error: '',
    status: ''
}
export const registrationUser = createAsyncThunk(
    'auth/registration',
    async (data: any, {dispatch}) => {
        try {
            let response = await authService.registration(data);

            dispatch(setToken(response.data))
        } catch (e) {
            console.log(e);
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: Partial<IUser>, {dispatch}) => {
        const response = await authService.login(data);
        dispatch(setToken(response.data))
    }
)
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_) => {
        await authService.logout();
        return localStorage.clear()
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: any) => {
            state.error = action.payload.message
            const access_token = action.payload.tokenPair.accessToken
            localStorage.setItem('access', action.payload.tokenPair.accessToken)
            localStorage.setItem('refresh', action.payload.tokenPair.refreshToken)
            state.isLog = true;
            const {role, id} = decodeToken(access_token) as string | any
            localStorage.setItem('role', role);
            localStorage.setItem('userId', id);
        },
        setUsers: (state, action: any) => {
            console.log('-----------------');
            console.log(action.payload);
            console.log('-----------------');
            // state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = "fulfilled";
        });
    }
})
const authReducer = authSlice.reducer;
export default authReducer;
export const {
    setToken, setUsers
} = authSlice.actions