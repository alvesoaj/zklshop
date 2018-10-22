import React, { Component } from 'react';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

class Container extends Component {
  state = {
    categories: ["Bla Bla Bla", "Foo Foo Foo", "Pop Pop Pop"],
    itens: [
      { id: 0, name: "First slide", image: "https://picsum.photos/900/350/?image=0" },
      { id: 1, name: "Second slide", image: "https://picsum.photos/900/350/?image=1" },
      { id: 2, name: "Third slide", image: "https://picsum.photos/900/350/?image=2" },
    ]
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <SidePanel categories={this.state.categories}/>
          <MainPanel itens={this.state.itens} />
        </div>
      </div>
    );
  }
}

export default Container;
