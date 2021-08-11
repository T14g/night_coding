import React from 'react';
import { HeaderContainer, Logo, Username } from './header.styles';
import { UserContext } from '../../contexts/user-context';

const Header = () => {

    return (
        <HeaderContainer>
            <Logo>Guitar React</Logo>
            <UserContext.Consumer>
                {({ logged }) => (
                    <Username>{logged}</Username>
                )}
            </UserContext.Consumer>
        </HeaderContainer>
    );
}

export default Header;