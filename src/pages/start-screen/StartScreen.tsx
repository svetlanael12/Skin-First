import { observer } from 'mobx-react-lite';
import React from 'react';
import { Logo } from '../../assets/logo';
import { Box, Typography } from '@mui/material';
import { startScreenBodySx, startScreenTitleSx, startScreenWrapperSx } from './styles';
import { MainButton } from '../../components/buttons/main-button/MainButton';
import { useNavigate } from 'react-router-dom';
import { ClientRouters } from '../../routers/clientRouters';

export const StartScreen = observer(() => {
    const navigate = useNavigate();

    const onClickLogin = (): void => {
        navigate(ClientRouters.login);
    };

    const onClickRegistartion = (): void => {
        navigate(ClientRouters.registration);
    };

    return (
        <Box sx={startScreenWrapperSx}>
            <Logo />
            <Typography variant="h1" sx={startScreenTitleSx}>
                Skin First
            </Typography>
            <Typography variant="h3">Центр заботы о здоровье</Typography>
            <Typography variant="body1" sx={startScreenBodySx}>
                Заботьтесь о себе! Используйте наш сервис для поиска врачей, чтобы получить качественную медицинскую
                помощь. Вводите симптомы, выбирайте специалиста и записывайтесь на прием всего в несколько кликов!
            </Typography>

            <MainButton variant="contained" sx={{ mt: 2 }} onClick={onClickLogin}>
                Войти
            </MainButton>
            <MainButton sx={{ mt: 2 }} onClick={onClickRegistartion}>
                Зарегистироваться
            </MainButton>
        </Box>
    );
});
