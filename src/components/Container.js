import React, { Component } from 'react';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

class Container extends Component {
  state = {
    categories: [
      {id: 1, name: 'Bla Bla Bla'},
      {id: 2, name: 'Foo Foo Foo'},
      {id: 3, name: 'Pop Pop Pop'}
    ],
    slides: [
      { id: 0, name: 'First slide', image: 'https://picsum.photos/900/350/?image=0' },
      { id: 1, name: 'Second slide', image: 'https://picsum.photos/900/350/?image=1' },
      { id: 2, name: 'Third slide', image: 'https://picsum.photos/900/350/?image=2' },
    ],
    items: [
      { id: 0, name: 'Item One', image: 'https://picsum.photos/700/400/?image=100', price: 24.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 100 },
      { id: 1, name: 'Item Two', image: 'https://picsum.photos/700/400/?image=101', price: 23.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 23 },
      { id: 2, name: 'Item Three', image: 'https://picsum.photos/700/400/?image=102', price: 29.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 78 },
      { id: 3, name: 'Item Four', image: 'https://picsum.photos/700/400/?image=103', price: 14.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 5 },
      { id: 4, name: 'Item Five', image: 'https://picsum.photos/700/400/?image=104', price: 232.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 36 },
      { id: 5, name: 'Item Six', image: 'https://picsum.photos/700/400/?image=106', price: 754.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 61 }
    ]
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <SidePanel categories={this.state.categories}/>
          <MainPanel slides={this.state.slides} items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Container;
