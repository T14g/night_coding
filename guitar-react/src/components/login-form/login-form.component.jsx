import React from 'react';
import { Form, Input, H2, Button } from './login-form.styles';

const LoginForm = () => {

    return (
        <Form>
            <H2>Login Form</H2>
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
            <Button>Login</Button>
        </Form>
    );
}

export default LoginForm;