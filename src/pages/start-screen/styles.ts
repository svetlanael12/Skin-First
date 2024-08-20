import { SxProps } from '@mui/material';

export const startScreenWrapperSx: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

    height: '100vh',
    maxWidth: '600px',
    m: 'auto',
};

export const startScreenTitleSx: SxProps = {
    pt: 1,
};

export const startScreenBodySx: SxProps = {
    mt: 5,
    textAlign: 'center',
};

export const startScreenButtonsWrapperSx: SxProps = {
    width: '100%',
    '@media (min-width:800px)': {
        maxWidth: '300px',
    },
};
