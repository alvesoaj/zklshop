import React, { Component } from 'react';

import Carousel from './Carousel';
import Item from './Item';
import Paginator from './Paginator';

import { Route, Switch } from 'react-router-dom';

class MainPanel extends Component {
  render() {
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
      <div className="col-lg-9">
        <Carousel slides={this.props.slides}/>
        <Switch>
          <Route path='/products/:productId' render={() => (
              <h3>
                Welcome! Select a body of saline water above.
              </h3>
            )}
          />
          <Route
            exact
            path='/'
            render={({ match }) => {
              const items = this.props.items.map((item) => {
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
              })
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
                            onChange={this.props.onOrderChange}
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
                      itemsPer={this.props.itemsPer}
                      itemsCount={this.props.itemsCount}
                      itemsPage={this.props.itemsPage}
                      onChangePage={this.props.onChangePage}
                    />
                  </div>
                </div>
              );
            }}
          />
          <Route render={({ location }) => (
              <div className='ui inverted red segment'>
                <h3>
                  Error! No matches for <code>{location.pathname}</code>
                </h3>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default MainPanel;


