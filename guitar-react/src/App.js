import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Sidebar from './components/sidebar/sidebar.component';
import Login from './pages/login/login.component';
import Home from './pages/home/home.component';

import { UserContext } from './contexts/user-context';
import { SidebarContext } from './contexts/sidebar-context';

import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.handleLogin = () => {

      let userNewState = this.state.userState;
      userNewState.logged = 'usuario logado!';

      this.setState({
        userState: userNewState
      })
    }

    this.handleLogout = () => {

      let userNewState = this.state.userState;
      userNewState.logged = 'nao logado';

      this.setState({
        userState: userNewState
      })

    }

    this.toggleSidebar = () => {

      let sidebarNewState = this.state.sidebarState;
      sidebarNewState.showing = !sidebarNewState.showing;

      this.setState({
        sidebarState: sidebarNewState
      })

    }

    this.state = {

      userState: {
        logged: 'nao logado',
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout
      },

      sidebarState: {
        showing: false,
        toggle: this.toggleSidebar
      }

    };
  }

  renderHelper = () => {
    const { logged } = this.state.userState;

    switch (logged) {
      case 'nao logado':
        return <Login />;

      case 'usuario logado!':
        return <Home />;
    }
  }

  render() {
    const { userState, sidebarState } = this.state;

    return (
      <SidebarContext.Provider value={sidebarState}>
        <UserContext.Provider value={userState} >
          <div className="App">
            <Header />
            {this.renderHelper()}
            <Sidebar />
            <Footer />
          </div>
        </UserContext.Provider>
      </SidebarContext.Provider>

    )
  }

}

export default App;
