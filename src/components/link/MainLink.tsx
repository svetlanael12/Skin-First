import { Link, LinkProps } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { mainLinkSx } from './styles';

export const MainLink = observer((props: LinkProps) => {
    const { children, sx, ...otherProps } = props;
    const styleSx = { ...mainLinkSx, ...sx };

    return (
        <Link {...otherProps} sx={styleSx}>
            {children}
        </Link>
    );
});
