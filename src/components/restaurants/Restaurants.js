import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;