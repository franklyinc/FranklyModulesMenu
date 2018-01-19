import React, { Component, PropTypes } from 'react';

class MenuDemo extends Component {

  render(){
	  
    return (
      <div>
	      {JSON.stringify(this.props.menu)} (BRANCH)
      </div>
    );
	  
  }
}

export default MenuDemo;
