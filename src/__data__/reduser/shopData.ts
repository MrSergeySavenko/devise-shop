import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData } from '../models/models';

const initialState: IDataState = {
    data: null,
};

export const dataSlice = createSlice({
    name: 'hotel',
    initialState: initialState,
    reducers: {},
});

export default dataSlice.reducer;
