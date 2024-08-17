import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { wrapperAppSx } from './styles';

export type WrapperAppProps = {
    children?: React.ReactNode;
};

export const WrapperApp = observer((props: WrapperAppProps) => {
    const { children } = props;

    return <Box sx={wrapperAppSx}>{children}</Box>;
});
