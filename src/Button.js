import React from 'react';

class Button extends React.Component {
  render() {
    const { className, clickFunction, disable, children } = this.props;
    return(
      <button 
      className= { `button-text ${className}` }
      onClick= { clickFunction }
      disabled = { disable }>
        { children }
      </button>
    )
  }
}

export default Button;