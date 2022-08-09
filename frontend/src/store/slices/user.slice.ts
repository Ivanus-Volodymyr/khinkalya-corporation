import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userService } from '../../services/user.service';
import { IUser } from '../../interfaces';

const initialState = {
  status: '',
  user: {} as IUser,
  allUser: [] as IUser[],
};

export const getAll = createAsyncThunk<IUser[] | undefined, void>(
  'auth/user',
  async (_, { dispatch, getState }) => {
    try {
      const { data } = await userService.getAllUsers();
      return data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  },
);

export const getUserById = createAsyncThunk<IUser | undefined, string>(
  'userById',
  async (id, { dispatch, getState }) => {
    try {
      const { data } = await userService.getUserById(id);
      return data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  },
);

export const getCurrentUser = createAsyncThunk<IUser | undefined , string>('auth/currentUser',
  async (accessToken) => {
  try{
    const {data} = await userService.getUserByToken(accessToken);
    return data;
  } catch (e) {
    return undefined;
   }
  })


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(getUserById.fulfilled, (state, action:PayloadAction<IUser | undefined>) => {
      state.status = 'fulfilled';
      if (action.payload) state.user = action.payload;
    });
    builder.addCase(getAll.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(getAll.fulfilled, (state, action:PayloadAction<IUser[] | undefined>) => {
      state.status = 'fulfilled';
      if (action.payload) state.allUser = action.payload as IUser[];
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action:PayloadAction<IUser | undefined>) => {
      state.status = 'fulfilled';
      if (action.payload) {
        state.user = action.payload;
      }
    });
  },
});
const userReducer = userSlice.reducer;
export {userReducer};
