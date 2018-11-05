import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SidePanel extends Component {
  render() {
    const categories = this.props.categories.map((category) => (
      <Link
        to={`/${category.slug}`}
        key={category.id}
        className="list-group-item"
      >
        {category.name}
      </Link>
    ));
    return (
      <div className="col-lg-3">
        <Link
          to="/"
          className="text-center"
        >
          <img src="./assets/images/price-tag.png" className="rounded img-fluid" alt="ZKLshop Brand"/>
          <h1 className="my-4">ZKLshop</h1>
        </Link>
        <div className="list-group">
          <li className="list-group-item d-flex justify-content-between active">
            <h4>Categories</h4>
            <h4>
              <Link
                to="/"
                className="text-white"
              >
                <i className="fas fa-broom"></i>
              </Link>
            </h4>
          </li>
          {categories}
        </div>
      </div>
    );
  }
}

export default SidePanel;
