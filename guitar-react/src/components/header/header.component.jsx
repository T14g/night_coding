import React from 'react';
import { HeaderContainer, Logo, MenuHamburguerBar, MenuHamburguerBox, HeaderTimer } from './header.styles';
import { UserContext } from '../../contexts/user-context';
import { SidebarContext } from '../../contexts/sidebar-context';
import CustomButton from '../../components/custom-button/custom-button.component';

const Header = () => {

    return (
        <HeaderContainer>
            <Logo>Guitar React</Logo>
            <SidebarContext.Consumer>
                {({ toggle }) => (
                    <UserContext.Consumer>
                        {({ logged, handleLogout }) => (
                            <React.Fragment>
                                {
                                    logged === 'usuario logado!' ? (
                                        <React.Fragment>

                                            <HeaderTimer>
                                                Você já tocou por 300h:00m:00s!
                                            </HeaderTimer>

                                            {/* <CustomButton
                                                handleClick={handleLogout}
                                                customClass="float-right mb-0"
                                                title="Logout"
                                                type="solid" color="#000"
                                                background="#fff" /> */}

                                            <MenuHamburguerBox onClick={toggle}>
                                                <MenuHamburguerBar />
                                                <MenuHamburguerBar />
                                                <MenuHamburguerBar />
                                            </MenuHamburguerBox>

                                        </React.Fragment>

                                    ) : null
                                }
                            </React.Fragment>
                        )}
                    </UserContext.Consumer>
                )}
            </SidebarContext.Consumer>
        </HeaderContainer>
    );
}

export default Header;