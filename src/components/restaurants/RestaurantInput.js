import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state={
      text:'',
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={}>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
