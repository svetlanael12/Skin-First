import { observer } from 'mobx-react-lite';
import React from 'react';
import { WrapperWithBackBtn } from '../../components/wrappers/WrapperWithBackBtn';
import { useNavigate } from 'react-router-dom';
import { ClientRouters } from '../../routers/clientRouters';

export const LoginPage = observer(() => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(ClientRouters.startScreen);
    };

    return (
        <WrapperWithBackBtn title="Войти" onClickBack={onClickBack}>
            LoginPage
        </WrapperWithBackBtn>
    );
});
