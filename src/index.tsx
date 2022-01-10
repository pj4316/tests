import { CssBaseline } from '@mui/material';
import {configure} from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App";

configure({enforceActions: 'observed'})

window.document.title = 'Max의 테스트 모험'

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'),
);
