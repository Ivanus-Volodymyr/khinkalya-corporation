import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuthResponse, ILogoutRequest, IUser} from "../../interfaces";
import {authService} from "../../services/auth.service";

import {decodeToken} from "react-jwt";
// import {getAllDishByLocalityId} from "./dish.slice";

interface IInitialState {
    user: Partial<IUser>;
    accessToken?: string;
    refreshToken?: string;
    status?: number | string;
    isLoginActive:  boolean,
    isRegisterActive: boolean,
    error: string,
}

const initialState:IInitialState = {
    user: {},
    accessToken: '',
    refreshToken: '',
    error: '',
    status: 200,
    isLoginActive: false,
    isRegisterActive: false,
}
export const userRegistration = createAsyncThunk<IAuthResponse, IUser>(
    'auth/registration',
    async (user) => {
        try {
            const response = await authService.registration(user);
            const { data, status } = response;

            return { userData: data, status: status, error: undefined };

        } catch (e) {
            return { userData: undefined, status: 401, error: `${e}` };
        }
    }
)

export const userLogin = createAsyncThunk<IAuthResponse, Partial<IUser>>(
    'auth/login',
    async (user: Partial<IUser>) => {
        try{
            const {data, status} =  await authService.login(user);

            return { userData: data, status: status, error: undefined };
        } catch (error) {
            return { userData: undefined, status: 401, error: `${error}` };
        }
    }
)

export const userLogout = createAsyncThunk<void, ILogoutRequest>(
    'auth/logout',
    async (accessToken) => {
        try {
            await authService.logout(accessToken);
        } catch (error) {
            return undefined
        }
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
            // state.isLog = true;
            const {role, id} = decodeToken(access_token) as string | any
            localStorage.setItem('role', role);
            localStorage.setItem('userId', id);
        },
        setUsers: (state, action: any) => {
            console.log('-----------------');
            console.log(action.payload);
            console.log('-----------------');
            // state.users = action.payload
        },

        setModalActive:(state) => {
            state.isLoginActive = false;
            state.isRegisterActive = false;
        },

        setLoginActive:(state) => {
            state.isLoginActive= !state.isLoginActive;
        },

        setRegisterActive:(state) => {
            state.isRegisterActive= !state.isRegisterActive;
            state.isLoginActive = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userRegistration.fulfilled, (state, action) => {
            state.accessToken = action.payload.userData?.tokensPair?.accessToken;
            state.refreshToken = action.payload?.userData?.tokensPair?.refreshToken;
            state.user = {...action.payload?.userData?.user};
            state.status = action.payload?.status;
            state.error = action.payload.error || "";

            state.isRegisterActive = false;
            localStorage.setItem('accessToken', action.payload.userData?.tokensPair.accessToken || '');
            localStorage.setItem('refreshToken', action.payload.userData?.tokensPair.refreshToken || '');
        });

        builder.addCase(userLogin.pending, (state, action) => {
            state.status = 'Loading';
        });

        builder.addCase(userLogin.fulfilled, (state, action) => {
            const access_token = action.payload.userData?.tokensPair.accessToken;
            state.accessToken = access_token;
            state.refreshToken = action.payload?.userData?.tokensPair.refreshToken;
            state.user = {...action.payload?.userData?.user};
            state.status = action.payload?.status;

            state.isLoginActive = false;
            localStorage.setItem('accessToken', action.payload.userData?.tokensPair.accessToken || '');
            localStorage.setItem('refreshToken', action.payload.userData?.tokensPair.refreshToken || '');

            const {role, id} = decodeToken(access_token) as string | any
            localStorage.setItem('role', role);
            localStorage.setItem('userId', id);
        });

    }
})
const authReducer = authSlice.reducer;
export default authReducer;
export const {
    setToken, setUsers, setModalActive, setLoginActive, setRegisterActive
} = authSlice.actions
