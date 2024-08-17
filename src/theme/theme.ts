import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2260ff',
        },
        // secondary: {
        //     main: '#dc004e', // Вторичный цвет
        // },
        // background: {
        //     default: '#f5f5f5', // Цвет фона приложения
        //     paper: '#ffffff', // Цвет для карточек и других элементов
        // },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontSize: '42px',
            fontWeight: 100,
            color: '#2260ff',
        },
    },
});
