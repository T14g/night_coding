import React from 'react';
import { HeaderContainer, Logo, Username, HeaderTimer } from './header.styles';
import { UserContext } from '../../contexts/user-context';
import CustomButton from '../../components/custom-button/custom-button.component';

const Header = () => {

    return (
        <HeaderContainer>
            <Logo>Guitar React</Logo>
            <UserContext.Consumer>
                {({ logged, handleLogout }) => (
                    <React.Fragment>
                        {
                            logged === 'usuario logado!' ? (
                                <React.Fragment>

                                    <HeaderTimer>
                                        Você já tocou por 300h:00m:00s!
                                    </HeaderTimer>

                                    <CustomButton
                                    handleClick={handleLogout}
                                    customClass="float-right mb-0"
                                    title="Logout"
                                    type="solid" color="#000"
                                    background="#fff" />

                                </React.Fragment>
                                
                            ) : null
                        }
                    </React.Fragment>
                )}
            </UserContext.Consumer>
        </HeaderContainer>
    );
}

export default Header;