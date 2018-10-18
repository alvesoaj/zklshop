import React, { Component } from 'react';

class Footer extends Component {
  state = {
    currentYear: new Date().getFullYear()
  }
  render() {
    return (
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; ZKLshop {this.state.currentYear}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
