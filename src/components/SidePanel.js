import React, { Component } from 'react';

class SidePanel extends Component {
  render() {
    const categories = this.props.categories.map((category) => (
      <a href="/" className="list-group-item">{category}</a>
    ));
    return (
      <div className="col-lg-3">
        <a href="/" className="text-center">
          <img src="./assets/images/price-tag.png" class="rounded img-fluid" alt="ZKLshop Brand"/>
          <h1 className="my-4">ZKLshop</h1>
        </a>
        <div className="list-group">
          {categories}
        </div>
      </div>
    );
  }
}

export default SidePanel;
