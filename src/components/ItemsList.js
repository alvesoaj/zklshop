import React, { Component } from 'react';

import Item from './Item';
import Paginator from './Paginator';

class ItemsList extends Component {
  state = {
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
    defaultOrder: 'updated_at desc',
    categorySlug: null,
  };
  componentDidMount() {
    this.setState({ categorySlug: this.props.categorySlug })
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items, itemsCount: serverItems.count })
      ), this.props.categorySlug, this.state.defaultOrder, this.state.itemsPer, this.state.itemsPage
    );
  };
  onOrderChange = (event) => {
    this.setState({ defaultOrder: event.target.value })
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items, itemsCount: serverItems.count })
      ), this.state.categorySlug, event.target.value, this.state.itemsPer, this.state.itemsPage
    );
  };
  onChangePage = (event, page) => {
    this.setState({ itemsPage: page })
    window.client.getItems((serverItems) => (
        this.setState({ items: serverItems.items })
      ), this.state.categorySlug, this.state.defaultOrder, this.state.itemsPer, page
    );
  };
  render() {
    if (this.props.categorySlug !== this.state.categorySlug) {
      this.componentDidMount();
    }
    const items = this.state.items.map((item) => {
      return(
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
          rate={item.rate}
        />
      )
    });
    const sortOptions = [
      { id: 1, value: 'updated_at desc', label: 'Newer' },
      { id: 2, value: 'sale_price asc', label: 'Minor Price' },
      { id: 3, value: 'sale_price desc', label: 'Higher Price' },
      { id: 4, value: 'updated_at asc', label: 'Older' },
    ].map((opt, i) => {
      return(
        <option key={opt.id} value={opt.value}>{opt.label}</option>
      )
    });
    return (
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-end mb-3">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <p>Sort by:&nbsp;</p>
              </li>
              <li className="nav-item">
                <select
                  className="form-control-sm"
                  onChange={this.onOrderChange}
                >
                  {sortOptions}
                </select>
              </li>
            </ul>
          </nav>
          <div className="row">
            {items.length ? items : <div className="jumbotron jumbotron-fluid col-12"><div className="container"><h1 className="display-4">No items found! =(</h1></div></div>}
          </div>
          <Paginator
            itemsPer={this.state.itemsPer}
            itemsCount={this.state.itemsCount}
            itemsPage={this.state.itemsPage}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}

export default ItemsList;
