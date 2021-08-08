import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { Form, Input, H2, Button } from './login-form.styles';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = { showing: 'login' };
    }

    renderHelper = () => {
        const { showing } = this.state;

        switch (showing) {
            case 'register':
                return (
                    <React.Fragment>
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Password" type="password" />
                        <Input placeholder="Confirm Password" type="password" />
                    </React.Fragment>
                )

            case 'login':
                return (
                    <React.Fragment>
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Password" type="password" />
                    </React.Fragment>
                )
        }
    }

    handleRegister = (e) => {
        e.preventDefault();
        this.setState({ showing: 'register' });
    }

    handlLogin = (e) => {
        e.preventDefault();
        this.setState({ showing: 'login' });
    }

    render() {
        const { showing } = this.state;

        return (
            <Form>
                <H2>{showing}</H2>
                {this.renderHelper()}
                <CustomButton
                    handleClick={this.handlLogin}
                    title="Login"
                    type="solid" color="#000"
                    background="#fff" />

                <CustomButton
                    handleClick={this.handleRegister}
                    title="Register"
                    type="solid" color="#000"
                    background="#fff"
                />
            </Form>
        );
    }

}

export default LoginForm;