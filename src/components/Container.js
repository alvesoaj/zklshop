import React, { Component } from 'react';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

class Container extends Component {
  state = {
    categories: [
      {id: 1, name: 'Bla Bla Bla', slug: 'bla-bla-bla'},
      {id: 2, name: 'Foo Foo Foo', slug: 'foo-foo-foo'},
      {id: 3, name: 'Pop Pop Pop', slug: 'pop-pop-pop'},
    ],
    slides: [
      { id: 0, name: 'First slide', image: 'https://picsum.photos/900/350/?image=0' },
      { id: 1, name: 'Second slide', image: 'https://picsum.photos/900/350/?image=1' },
      { id: 2, name: 'Third slide', image: 'https://picsum.photos/900/350/?image=2' },
    ],
  };
  componentDidMount() {
    window.client.getCategories((serverCategories) => (
        this.setState({ categories: serverCategories.categories })
      )
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <SidePanel
            categories={this.state.categories}
          />
          <MainPanel
            slides={this.state.slides}
          />
        </div>
      </div>
    );
  }
}

export default Container;
