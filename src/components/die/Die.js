import React from 'react';
import './Die.css';

class Die extends React.Component {

  constructor() {
    super();
    this.state = {
      isSelected: false,
      backgroundColor: '#FFFFFF',
    };
  }

  render() {
    return (
      <div
        className='die'
        onClick={this.onClick}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <span>{this.props.die.letter}</span>
      </div>
    )
  }

  onClick = () => {
    if (this.props.die.clickable) {
      if (!this.state.isSelected) {
        this.setState({
          isSelected: true,
          backgroundColor: '#F6DD45',
        });
        this.props.addToCurrentWord(this.props.die);
      } else {
        this.setState({
          isSelected: false,
          backgroundColor: '#FFFFFF',
        })
        this.props.removeFromCurrentWord(this.props.die);
      }
    }
  }

}
export default Die;