import React, { Component } from 'react';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

class Container extends Component {
  state = {
    selectedCategory: null,
    defaultOrder: 'updated_at desc',
    categories: [
      {id: 1, name: 'Bla Bla Bla'},
      {id: 2, name: 'Foo Foo Foo'},
      {id: 3, name: 'Pop Pop Pop'},
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
      { id: 5, name: 'Item Six', image: 'https://picsum.photos/700/400/?image=106', price: 754.99, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!', rate: 61 },
    ],
    itemsPer: 6,
    itemsCount: 0,
    itemsPage: 1,
  };
  componentDidMount() {
    this.loadFromServer();
  };
  loadFromServer = () => {
    window.client.getCategories((serverCategories) => (
        this.setState({ categories: serverCategories.categories })
      )
    );
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items, itemsCount: serverItems.count })
      ), this.state.selectedCategory, this.state.defaultOrder, this.state.itemsPer, this.state.itemsPage
    );
  };
  onOrderChange = (event) => {
    this.setState({ defaultOrder: event.target.value })
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items })
      ), this.state.selectedCategory, event.target.value, this.state.itemsPer, this.state.itemsPage
    );
  };
  onCategoryChosen = (event, category_id) => {
    event.preventDefault();
    this.setState({ selectedCategory: category_id })
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items })
      ), category_id, this.state.defaultOrder, this.state.itemsPer, this.state.itemsPage
    );
  };
  onChangePage = (event, page) => {
    event.preventDefault();
    this.setState({ itemsPage: page })
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items })
      ), this.state.selectedCategory, this.state.defaultOrder, this.state.itemsPer, page
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <SidePanel
            categories={this.state.categories}
            onCategoryChosen={this.onCategoryChosen}
          />
          <MainPanel
            slides={this.state.slides}
            items={this.state.items}
            itemsPer={this.state.itemsPer}
            itemsCount={this.state.itemsCount}
            itemsPage={this.state.itemsPage}
            onOrderChange={this.onOrderChange}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Container;
