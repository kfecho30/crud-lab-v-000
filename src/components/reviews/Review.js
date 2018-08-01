import React, { Component } from 'react';

class Review extends Component {
  handleClick = () => {
    return this.props.deleteReview(this.props.review.id);
  }
  render() {

    return (
      <div>
        <li>
          {this.propsreview.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
