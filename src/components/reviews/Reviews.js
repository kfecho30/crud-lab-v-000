import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props
    const assoc = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = reviews.map(review => {
      return (
        <Review key={review.id} review={review} deleteReview={deleteReview} />
      )
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
