import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Paginator extends Component {
  render() {
    const pagesCount = Math.ceil(this.props.itemsCount / this.props.itemsPer);
    const previosButtonCasses = this.props.itemsPage === 1 ? 'page-item disabled' : 'page-item';
    const nextButtonCasses = this.props.itemsPage === pagesCount ? 'page-item disabled' : 'page-item';
    const pages = [...Array(pagesCount)].map((e, i) => {
      const liClasses = this.props.itemsPage === i + 1 ? 'page-item active' : 'page-item';
      return (
        <li className={liClasses} key={i + 1}>
          <Link
            to={`?p=${i + 1}`}
            className='page-link'
            onClick={(event) => this.props.onChangePage(event, i + 1)}
          >
            {i + 1}
          </Link>
        </li>
      )
    });
    if (pages.length > 1) {
      return (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={previosButtonCasses}>
              <Link
                to={`?p=${this.props.itemsPage - 1}`}
                className='page-link'
                onClick={(event) => this.props.onChangePage(event, this.props.itemsPage - 1)}
              >
                Previous
              </Link>
            </li>
            {pages}
            <li className={nextButtonCasses}>
              <Link
                to={`?p=${this.props.itemsPage + 1}`}
                className='page-link'
                onClick={(event) => this.props.onChangePage(event, this.props.itemsPage + 1)}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return null;
    }
  }
}

export default Paginator;
