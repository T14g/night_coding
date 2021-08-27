import React from 'react';
import { SectionTitle } from './home.styles';
import MenuHome from '../../components/menu-home/menu-home.component';
class Home extends React.Component {

    render() {
        return (
            <div>
                <MenuHome />
            </div>
        )
    }
}

export default Home;