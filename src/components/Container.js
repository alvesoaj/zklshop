import React, { Component } from 'react';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

class Container extends Component {
  state = {
    categories: ["Bla Bla Bla", "Foo Foo Foo", "Pop Pop Pop"],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <SidePanel categories={this.state.categories}/>
          <MainPanel />
        </div>
      </div>
    );
  }
}

export default Container;
