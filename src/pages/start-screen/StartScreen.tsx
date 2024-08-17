import { observer } from 'mobx-react-lite';
import React from 'react';
import { Logo } from '../../assets/logo';
import { Box, Typography } from '@mui/material';
import { startScreenWrapperSx } from './styles';

export const StartScreen = observer(() => {
    return (
        <Box sx={startScreenWrapperSx}>
            <Logo />
            <Typography variant="h1" sx={{ pt: 1 }}>
                Skin First
            </Typography>
            {/* **Заботьтесь о себе!** Используйте нашу сервис для поиска врачей, чтобы получить качественную медицинскую помощь. Вводите симптомы, выбирайте специалиста и записывайтесь на прием всего в несколько кликов! */}
        </Box>
    );
});
