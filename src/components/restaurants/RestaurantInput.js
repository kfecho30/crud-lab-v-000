import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state={
      text:'',
    }
  }

  handleChange = e =>{

  }

  render() {
    return (
      <div>
        <form onSubmit={}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
