import React from 'react';
import './Die.css';

class Die extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div
        className='die'
        onClick={this.onClick}
        style={{
          backgroundColor: this.props.die.isSelected ? '#F6DD45' : '#FFFFFF',
          cursor: this.props.die.clickable ? 'pointer' : 'default',
        }}
      >
        <span>{this.props.die.letter}</span>
      </div>
    )
  }

  onClick = () => {
    if (this.props.die.clickable) {
      if (!this.props.die.isSelected) {
        this.props.addToCurrentWord(this.props.die);
      } else {
        this.props.removeFromCurrentWord(this.props.die);
      }
    }
  }

}
export default Die;