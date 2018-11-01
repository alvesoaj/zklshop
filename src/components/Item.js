import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    let rate = '★ ★ ★ ★ ★'
    if (this.props.rate <= 20) {
      rate = '★ ☆ ☆ ☆ ☆'
    } else if (this.props.rate <= 40) {
      rate = '★ ★ ☆ ☆ ☆'
    } else if (this.props.rate <= 60) {
      rate = '★ ★ ★ ☆ ☆'
    } else if (this.props.rate <= 80) {
      rate = '★ ★ ★ ★ ☆'
    }
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link
            to={`/products/${this.props.id}`}
          >
            <img className="card-img-top" src={this.props.image} alt={this.props.name} />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <Link
                to={`/products/${this.props.id}`}
                key={this.props.id}
              >
                {this.props.name}
              </Link>
            </h5>
            <h5 className="d-flex justify-content-between">
              <spam>${this.props.price}</spam>
              <i class="fas fa-cart-plus"></i>
            </h5>
            <p className="card-text">{this.props.description.substring(0, 100)}...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{rate}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
