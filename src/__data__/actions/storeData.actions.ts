import { IData } from '../models/models';
import { dataSlice } from '../reduser';
import { AppDispatch } from '../store';

export const fetchDataLow = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.dataFetch());

        const url = 'http://localhost:5000/products';

        const response = await fetch(url);
        const data: IData = await response.json();

        if (response) {
            dispatch(dataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(dataSlice.actions.dataFetchFailure(err as string));
        console.error(err);
    }
};
