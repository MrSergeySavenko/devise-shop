import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { DeviseShop } from './Pages/DeviseShop';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <DeviseShop />
    </React.StrictMode>
);
