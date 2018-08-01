import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

  //  const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={this.props.review} deleteReview={this.props.deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;
