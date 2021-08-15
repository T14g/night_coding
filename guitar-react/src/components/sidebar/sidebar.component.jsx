import React from 'react';
import { SidebarContainer } from './sidebar.styles';
import { SidebarContext } from '../../contexts/sidebar-context';
import CustomButton from '../custom-button/custom-button.component';

const Sidebar = () => {

    return (
        <SidebarContext.Consumer>
            {({ showing, toggle }) => (
                <SidebarContainer show={showing}>
                    Sidebar Menu

                    <CustomButton
                        handleClick={toggle}
                        title="Hide Menu"
                        type="solid" color="#000"
                        background="#fff" />
                </SidebarContainer>
            )}
        </SidebarContext.Consumer>

    );
}

export default Sidebar;