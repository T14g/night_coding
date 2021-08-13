import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Login from './pages/login/login.component';
import Home from './pages/home/home.component';

import { UserContext } from './contexts/user-context';

import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.handleLogin = (user) => {
      this.setState({
        logged: 'usuario logado!'
      })
    }

    this.handleLogout = (user) => {
      this.setState({
        logged: 'nao logado'
      })
    }

    this.state = {
      logged: 'nao logado',
      handleLogin: this.handleLogin
    };
  }

  renderHelper = () => {
    const { logged } = this.state;
    switch (logged) {
      case 'nao logado':
        return <Login />;

      case 'usuario logado!':
        return <Home />;
    }
  }

  render() {

    return (
      <UserContext.Provider value={this.state} >
        <div className="App">
          <Header />
          {this.renderHelper()}
          <Footer />
        </div>
      </UserContext.Provider>
    )
  }

}

export default App;
