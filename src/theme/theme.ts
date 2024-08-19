import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.blue,
        },
        secondary: {
            main: colors.lightBlue, // Вторичный цвет
        },
        // background: {
        //     default: '#f5f5f5', // Цвет фона приложения
        //     paper: '#ffffff', // Цвет для карточек и других элементов
        // },
    },
    typography: {
        fontFamily: 'Montserrat',
        h1: {
            fontSize: '42px',
            fontWeight: 100,
            color: colors.blue,
        },
        h2: {
            fontSize: '24px',
            fontWeight: 700,
            color: colors.blue,
        },
        h3: {
            fontSize: '12px',
            fontWeight: 600,
            color: colors.blue,
        },
        body1: {
            fontSize: '12px',
            fontWeight: 300,
            color: colors.black,
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'text' },
                    style: {
                        backgroundColor: colors.lightBlue,
                        '&:hover': {
                            backgroundColor: '#b5c0eb',
                        },
                    },
                },
            ],
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: colors.blue,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    display: 'none', // Скрыть label
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    backgroundColor: colors.backgroundBlue,

                    borderRadius: '14px',
                    borderWidth: 0,
                    zIndex: -2,
                },
                input: {
                    color: colors.blue,
                    fontSize: '16px',
                    fontWeight: 500,
                    borderRadius: '14px',
                },
            },
        },
    },
});
