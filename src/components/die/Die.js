import React from 'react';
import './Die.css';

class Die extends React.Component {

  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
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
      if (!this.state.isSelected) {
        this.setState({ isSelected: true });
        this.props.addToCurrentWord(this.props.die);
      } else {
        this.setState({ isSelected: false });
        this.props.removeFromCurrentWord(this.props.die);
      }
    }
  }

}
export default Die;