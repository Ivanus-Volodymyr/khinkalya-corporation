import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dishService} from '../../services/dish.service';
import {IDish} from '../../interfaces';

interface IInitialState {
    result: IDish[];
    status: string;
    dishes: IDish[];
    item: number;
    popularDish: IDish;
    updateDish: IDish;
    loading: boolean;
}

const initialState: IInitialState = {
    result: [],
    status: 'Loading',
    dishes: [],
    item: 1,
    popularDish: {} as IDish,
    updateDish: {} as IDish,
    loading: true
};

export const getAllDishes = createAsyncThunk<IDish[] | undefined>(
    'dish/getAllDishes',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await dishService.getAllDishes();
            return data;
        } catch (e) {
            rejectWithValue(e);
        }
    },
);

export const getDishById = createAsyncThunk<IDish | undefined, number>(
    'dish/getDishById',
    async (dishId, {rejectWithValue}) => {
        try {
            const {data} = await dishService.getDishById(dishId);
            console.log(data);
            return data;
        } catch (e) {
            rejectWithValue(e);
        }
    },
);

export const getAllDishByLocalityId = createAsyncThunk(
    'dish/getAllDishByLocalityId',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await dishService.getAllDishes();
            return data.filter((value) => value.localityId === Number(id));
        } catch (e) {
            rejectWithValue(e);
        }
    },
);

export const updateDish = createAsyncThunk(
    'dishes/updateDishById',
    async ({dishId, dish, file}: { dishId: number, dish: Partial<IDish>, file?: any }) => {
        try {
            const response = await dishService.updateDishById(dishId, dish, file);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }
);

const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllDishByLocalityId.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(
            getAllDishByLocalityId.fulfilled,
            (state, action: PayloadAction<IDish[] | undefined>) => {
                state.status = 'fulfilled';
                const item = localStorage.getItem('restaurantId') || 1;
                if (action.payload) {
                    state.result = action.payload.filter(
                        (value) => value.restaurantId === +item,
                    );
                }
            },
        );
        builder.addCase(
            getAllDishes.fulfilled,
            (state, action: PayloadAction<IDish[] | undefined>) => {
                if (action.payload) {
                    state.dishes = action.payload;
                }
            },
        );

        builder.addCase(
            getDishById.fulfilled,
            (state, action: PayloadAction<IDish | undefined>) => {
                if (action.payload) {
                    state.loading = false;
                    state.popularDish = action.payload;
                    state.updateDish = action.payload;
                }
            },
        );
        builder.addCase(
            getDishById.pending,
            (state, action: PayloadAction<IDish | undefined>) => {
                if (action.payload) {
                    state.loading = true;
                }
            },
        );
    },
});
const dishReducer = dishSlice.reducer;
export {dishReducer};
