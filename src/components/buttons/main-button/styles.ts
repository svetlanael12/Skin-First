import { SxProps } from '@mui/material';

export const mainBtnSx: SxProps = {
    borderRadius: '30px',
    // maxWidth: '300px',
    px: 2,
    py: 1,

    fontSize: '14px',
    fontWeight: 600,
    boxShadow: 'none',

    '&:hover': {
        boxShadow: 'none',
    },
};
