import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { WrapperApp } from './components/wrapper-app/WrapperApp';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Сброс CSS для улучшенного отображения */}
            <WrapperApp>
                <RouterProvider router={router} />
            </WrapperApp>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
