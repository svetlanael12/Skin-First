import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { wrapperAppSx } from './styles';
import { NotificationWrapper } from '../notification-wrapper/NotificationWrapper';
import { RootStoreContext } from '../../context/RootStoreContext';
import { RootStore } from '../../stores/rootStore';

export type WrapperAppProps = {
    children?: React.ReactNode;
};

export const WrapperApp = observer((props: WrapperAppProps) => {
    const { children } = props;
    const rootStore = new RootStore();

    return (
        <RootStoreContext.Provider value={rootStore}>
            <NotificationWrapper>
                <Box sx={wrapperAppSx}>{children}</Box>
            </NotificationWrapper>
        </RootStoreContext.Provider>
    );
});
