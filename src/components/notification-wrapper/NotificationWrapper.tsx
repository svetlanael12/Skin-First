import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { Alert, Box, Stack } from '@mui/material';

import { useRootStore } from '../../hooks/context/useRootStore';
import { Snackbar } from '../snackbar/Snackbar';

export type NotificationWrapperProps = {
    children: JSX.Element;
};

export const NotificationWrapper = observer((props: NotificationWrapperProps) => {
    const { children } = props;
    const { notificates } = useRootStore().notificationStore;

    const renderSnackbars = (): JSX.Element[] => {
        return notificates.map((notificate, index) => {
            const top = index > 0 ? 80 * index + 'px !important' : '0';

            return <Snackbar key={index + notificate.id} idSnackbar={notificate.id} sx={{ top: top }} />;
        });
    };

    const snackbars = renderSnackbars();

    return (
        <Box>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                {snackbars}
            </Stack>

            {children}
        </Box>
    );
});
