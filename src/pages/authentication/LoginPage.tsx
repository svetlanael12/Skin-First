import { observer } from 'mobx-react-lite';
import React from 'react';
import { WrapperWithBackBtn } from '../../components/wrappers/WrapperWithBackBtn';
import { useNavigate } from 'react-router-dom';
import { ClientRouters } from '../../routers/clientRouters';
import { Form, Formik } from 'formik';
import { TextFieldWithFormik } from '../../components/inputs/textfield/TextFieldWithFormik';
import { object, string } from 'yup';
import { MainButton } from '../../components/buttons/main-button/MainButton';
import { Box, Typography } from '@mui/material';
import { MainLink } from '../../components/link/MainLink';
import { linkForgetPasswordSx, linkRegistrationSx } from '../../styles/loginPage';

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = object({
    email: string().required('Поле обязательно для заполнения').email('Неправильный формат email'),
    password: string()
        .min(5, 'Пароль должен состоять минимум из 5 символов')
        .required('Поле обязательно для заполнения'),
});

export const LoginPage = observer(() => {
    const navigate = useNavigate();

    const onClickBack = (): void => {
        navigate(ClientRouters.startScreen);
    };

    return (
        <WrapperWithBackBtn title="Войти" onClickBack={onClickBack}>
            <Box sx={{ pt: '15vh', maxWidth: '600px', margin: 'auto' }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnChange
                    onSubmit={(values) => console.log(values)}
                >
                    <Form>
                        <TextFieldWithFormik name="email" placeholder="Введите email *" />
                        <TextFieldWithFormik
                            name="password"
                            placeholder="Введите пароль *"
                            type="password"
                            sx={{ mt: 3 }}
                        />
                        <MainLink href={ClientRouters.forgetPassword} sx={linkForgetPasswordSx}>
                            Забыли пароль?
                        </MainLink>
                        <MainButton variant="contained" sx={{ mt: 3 }} type="submit">
                            Войти
                        </MainButton>
                        <Typography sx={linkRegistrationSx}>
                            Нет аккаунта?
                            <MainLink href={ClientRouters.registration}>Зарегистрироваться</MainLink>
                        </Typography>
                    </Form>
                </Formik>
            </Box>
        </WrapperWithBackBtn>
    );
});
