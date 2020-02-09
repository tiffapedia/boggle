import React from 'react';
import './Die.css';

class Die extends React.Component {

  render() {
    return (
      <div className='die' onClick={this.handleClick}>
        <span>{this.props.die.letter}</span>
      </div>
    )
  }

  handleClick = () => {
    console.log('is clicked: ', this.props.letter);
  }

}
export default Die;