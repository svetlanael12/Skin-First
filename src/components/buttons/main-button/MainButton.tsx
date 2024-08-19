import { Button, ButtonProps, SxProps } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { mainBtnSx } from './styles';

export type MainButtonProps = ButtonProps & {
    sx?: SxProps;
};

export const MainButton = observer((props: MainButtonProps) => {
    const { children, fullWidth = true, sx, ...otherProps } = props;

    return (
        <Button sx={{ ...mainBtnSx, ...sx }} fullWidth={fullWidth} {...otherProps}>
            {children}
        </Button>
    );
});
