import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { Form, Input, H2, Button } from './login-form.styles';

const LoginForm = () => {

    return (
        <Form>
            <CustomButton title="Login" type="solid"/>
            <CustomButton title="Register" type="solid"/>
        </Form>
    );
}

export default LoginForm;