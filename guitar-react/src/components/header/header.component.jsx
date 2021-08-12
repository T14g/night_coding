import React from 'react';
import { HeaderContainer, Logo, Username, HeaderTimer } from './header.styles';
import { UserContext } from '../../contexts/user-context';

const Header = () => {

    return (
        <HeaderContainer>
            <Logo>Guitar React</Logo>
            <UserContext.Consumer>
                {({ logged }) => (
                    <React.Fragment>
                        {
                            logged === 'usuario logado!' ? (
                                <HeaderTimer>
                                    Você já tocou por 300h:00m:00s!
                                </HeaderTimer>
                            ) : null
                        }
                        <Username>{logged}</Username>
                    </React.Fragment>
                )}
            </UserContext.Consumer>
        </HeaderContainer>
    );
}

export default Header;