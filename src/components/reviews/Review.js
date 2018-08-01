import React, { Component } from 'react';

class Review extends Component {
  handleClick = () => {
    return this.props.deleteReview(this.props.restaurant.id);
  }
  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
