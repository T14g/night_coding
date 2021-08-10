import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Login from './pages/login/login.component';

import './App.css';
import React from 'react';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    )
  }

}

export default App;
