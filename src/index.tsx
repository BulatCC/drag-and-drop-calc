import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { calcReducer } from './store/CalcData';

const store = configureStore({
    reducer: calcReducer,
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className="container">
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    </React.StrictMode>
);
