import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { Form, Input, H2, Button } from './login-form.styles';

const LoginForm = () => {

    return (
        <Form>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <CustomButton title="Login" type="solid" color="#000" background="#fff" />
            <CustomButton title="Register" type="solid" color="#000" background="#fff" />
        </Form>
    );
}

export default LoginForm;