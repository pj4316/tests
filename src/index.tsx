import { CssBaseline } from '@mui/material';
import {configure} from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App";

configure({enforceActions: 'observed'})

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'),
);
