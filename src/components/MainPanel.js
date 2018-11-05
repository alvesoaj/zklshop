import React, { Component } from 'react';

import Carousel from './Carousel';
import ItemsList from './ItemsList';

import { Route, Switch } from 'react-router-dom';

class MainPanel extends Component {
  render() {
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
            path='/:categorySlug?'
            render={({ match }) => {
              return (
                <ItemsList
                  categorySlug={match.params.categorySlug}
                />
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


