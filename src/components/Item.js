import React, { Component } from 'react';

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
          <a href="/"><img className="card-img-top" src={this.props.image} alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="/">{this.props.name}</a>
            </h4>
            <h5>${this.props.price}</h5>
            <p className="card-text">{this.props.description}</p>
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
