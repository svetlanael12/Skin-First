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
                    '&:-webkit-autofill': {
                        // webkitBo
                        boxShadow: `0 0 0 30px ${colors.backgroundBlue} inset`,
                        textFillColor: colors.blue,
                        height: 'auto',
                        borderRadius: '14px',
                        // -webkit-box-shadow: 0 0 0 30px white inset; /* Измените 'white' на нужный вам цвет фона */
                        // box-shadow: 0 0 0 30px white inset; /* Измените 'white' на нужный вам цвет фона */
                        // -webkit-text-fill-color: black; /* Установите цвет текста, который будет виден на фоне */
                    },

                    // &:-webkit-autofill:focus {
                    //     -webkit-box-shadow: 0 0 0 30px white inset; /* Имитация неактивного состояния при фокусе */
                    //     box-shadow: 0 0 0 30px white inset; /* Имитация неактивного состояния при фокусе */
                    // }

                    // &:-webkit-autofill:hover {
                    //     -webkit-box-shadow: 0 0 0 30px white inset; /* Остается стиль, когда поле в состоянии наведения */
                    //     box-shadow: 0 0 0 30px white inset; /* Остается стиль, когда поле в состоянии наведения */
                    // }
                },
            },
        },
    },
});
