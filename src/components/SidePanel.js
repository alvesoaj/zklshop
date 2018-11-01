import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SidePanel extends Component {
  render() {
    const categories = this.props.categories.map((category) => (
      <a
        href="#"
        key={category.id}
        className="list-group-item"
        onClick={(event) => this.props.onCategoryChosen(event, category.id)}
      >{category.name}</a>
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
              <a
                href="#"
                onClick={(event) => this.props.onCategoryChosen(event, null)}
                className="text-white"
              >
                <i class="fas fa-broom"></i>
              </a>
            </h4>
          </li>
          {categories}
        </div>
      </div>
    );
  }
}

export default SidePanel;
