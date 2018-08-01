import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  const {reviews, deleteReview} = this.props
  const reviewList = reviews.map(review => {
    return (
      <Review key={review.id} review={review} deleteReview={deleteReview} />
    )
  })
  render() {
    return (
      <ul>
        Reviews
      </ul>
    );
  }
};

export default Reviews;
