import React from 'react';
import LoginForm from '../../components/login-form/login-form.component';

import { Row, Column, BigTitle } from './login.styles';

const Login = () => {

    const backgroundImg = 'guitar_fire.jpg';

    return (
        <Row>
            <Column width={70} background={backgroundImg} >
                <BigTitle>
                    Are you Ready for <br/> Rock N' Roll?
                </BigTitle>
            </Column>

            <Column width={30}>
                <LoginForm />
            </Column>
        </Row>
    );
}

export default Login;