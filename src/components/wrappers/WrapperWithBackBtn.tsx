import { ChevronLeft } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { withBackBtnHeadSx, withBackBtnIconButtonSx, withBackBtnTitleSx } from './styles';
import { useNavigate } from 'react-router-dom';

export type WrapperWithBackBtnProps = {
    children: React.ReactNode;
    title?: React.ReactNode;
    onClickBack?: VoidFunction;
};

export const WrapperWithBackBtn = observer((props: WrapperWithBackBtnProps) => {
    const { children, title, onClickBack } = props;

    const navigate = useNavigate();

    const onClick = () => {
        if (onClickBack) {
            onClickBack();
            return;
        }
        navigate(-1);
    };

    return (
        <Box>
            <Box sx={withBackBtnHeadSx}>
                <IconButton sx={withBackBtnIconButtonSx} onClick={onClick}>
                    <ChevronLeft fontSize="large" />
                </IconButton>
                {title && (
                    <Typography variant="h2" sx={withBackBtnTitleSx}>
                        {title}
                    </Typography>
                )}
            </Box>
            <Box>{children}</Box>
        </Box>
    );
});
