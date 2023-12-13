import React, { useEffect } from 'react';

import styles from './DeviseShop.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';
import { fetchDataLow } from '../__data__/actions/storeData.actions';
import { NavBar } from '../components/NavBar/NavBar';

export const DeviseShop: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.shopData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataLow() as any);
    }, []);

    return (
        <div className={styles.mainpageWrapper}>
            <NavBar />
        </div>
    );
};
