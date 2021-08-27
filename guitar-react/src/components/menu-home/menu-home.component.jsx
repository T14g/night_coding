import React from 'react';
import MenuHomeItem from '../menu-home-item/menu-home-item.component';
import { Container } from './menu-home.styles';

const MenuHome = () => {

    return (
        <Container>
            <MenuHomeItem />
            <MenuHomeItem />
            <MenuHomeItem />
            <MenuHomeItem />
        </Container>
    );
}

export default MenuHome;