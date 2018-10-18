import React, { Component } from 'react';

import Nav from './components/Nav';
import Container from './components/Container';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
