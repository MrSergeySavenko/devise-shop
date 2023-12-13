import React from 'react';

import styles from './NavBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../__data__/store';

export const NavBar: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.shopData);

    console.log(data);

    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.linkWrapper}></div>
        </div>
    );
};
