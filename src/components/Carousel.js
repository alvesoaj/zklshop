import React, { Component } from 'react';

class Carousel extends Component {
  state =  {
    selectedItem: 0
  };
  carouselControlPrevious = (event) => {
    event.preventDefault();
    this.setState({
      selectedItem: this.state.selectedItem - 1 < 0 ? this.props.slides.length - 1 : this.state.selectedItem - 1
    });
  };
  carouselControlNext = (event) => {
    event.preventDefault();
    this.setState({
      selectedItem: this.state.selectedItem + 1 >= this.props.slides.length ? 0 : this.state.selectedItem + 1
    });
  };
  handleIndicatorClick = (index) => {
    this.setState({ selectedItem: index });
  }
  render() {
    const itensIndicator = this.props.slides.map((slide) => {
      const classNames = this.state.selectedItem === slide.id ? "active" : "";
      return (
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={slide.id}
          className={classNames}
          onClick={() => this.handleIndicatorClick(slide.id)}
        />
      )
    });
    const itensInner = this.props.slides.map((slide) => {
      const classNames = this.state.selectedItem === slide.id ? "carousel-item active" : "carousel-item";
      return (
        <div className={classNames}>
          <img
            className="d-block img-fluid"
            src={slide.image}
            alt={slide.name}
          />
        </div>
      )
    });
    return (
      <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          {itensIndicator}
        </ol>
        <div className="carousel-inner" role="listbox">
          {itensInner}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={this.carouselControlPrevious}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={this.carouselControlNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
