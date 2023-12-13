import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData } from '../models/models';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
};

export const dataSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<IData>) {
            return { ...state, isLoading: false, data: action.payload };
        },
    },
});

export default dataSlice.reducer;
