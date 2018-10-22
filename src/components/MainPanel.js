import React, { Component } from 'react';

import Carousel from './Carousel';
import Item from './Item';

class MainPanel extends Component {
  render() {
    const items = this.props.items.map((item) => {
      return(
        <Item
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
      <div className="col-lg-9">
        <Carousel slides={this.props.slides}/>
        <div className="row">
          {items}
        </div>
      </div>
    );
  }
}

export default MainPanel;
