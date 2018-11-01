import React, { Component } from 'react';

class Paginator extends Component {
  render() {
    const pagesCount = Math.ceil(this.props.itemsCount / this.props.itemsPer);
    const previosButtonCasses = this.props.itemsPage === 1 ? 'page-item disabled' : 'page-item';
    const nextButtonCasses = this.props.itemsPage === pagesCount ? 'page-item disabled' : 'page-item';
    const pages = [...Array(pagesCount)].map((e, i) => {
      const liClasses = this.props.itemsPage === i + 1 ? 'page-item active' : 'page-item';
      return (
        <li className={liClasses}>
          <a className="page-link" href="#" onClick={(event) => this.props.onChangePage(event, i + 1)}>{i + 1}</a>
        </li>
      )
    });
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={previosButtonCasses}><a className="page-link" href="#" onClick={(event) => this.props.onChangePage(event, this.props.itemsPage - 1)}>Previous</a></li>
          {pages}
          <li className={nextButtonCasses}><a className="page-link" href="#" onClick={(event) => this.props.onChangePage(event, this.props.itemsPage + 1)}>Next</a></li>
        </ul>
      </nav>
    );
  }
}

export default Paginator;
