import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';

import {
    Box,
    IconButton,
    SnackbarContent,
    Snackbar as SnackbarMUI,
    SnackbarOrigin,
    SnackbarProps as SnackbarPropsMUI,
} from '@mui/material';

import { useRootStore } from '../../hooks/context/useRootStore';
import { SnackbarType } from '../../types/common';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../theme/colors';

export type SnackbarProps = SnackbarPropsMUI & {
    idSnackbar: number;
};

export const Snackbar = observer((props: SnackbarProps) => {
    const { open = true, idSnackbar, sx } = props;
    const { notificates, deleteNotification } = useRootStore().notificationStore;

    const notificate = useMemo(() => {
        return notificates.find((notificate) => notificate.id === idSnackbar);
    }, [idSnackbar]);

    if (!notificate) {
        return <React.Fragment />;
    }

    const { type, message, autoHideDuration } = notificate;

    const anchorOrigin: SnackbarOrigin = { vertical: 'top', horizontal: 'right' };

    const backgroundColor = useMemo(() => {
        switch (type) {
            case SnackbarType.Error:
                return colors.red;
            case SnackbarType.Success:
                return colors.green;
            default:
                return colors.grey;
        }
    }, [type]);

    const contentProps = {
        sx: {
            '& .MuiSnackbarContent-message': {
                width: '100%',
            },
            background: backgroundColor,
            width: '100%',
        },
    };

    const onClose = (): void => {
        deleteNotification(idSnackbar);
    };

    const messageComponent = (
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box pr={3}>{message}</Box>
            <IconButton onClick={onClose}>
                <CloseIcon sx={{ color: colors.white }} />
            </IconButton>
        </Box>
    );

    return (
        <SnackbarMUI
            anchorOrigin={anchorOrigin}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            sx={sx}
        >
            <SnackbarContent message={messageComponent} {...contentProps} />
        </SnackbarMUI>
    );
});
