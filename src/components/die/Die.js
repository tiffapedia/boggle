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
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <span>{this.props.die.letter}</span>
      </div>
    )
  }

  handleClick = () => {
    console.log('is clicked: ', this.props.die.letter);
    if (!this.state.isSelected) {
      this.setState({
        isSelected: true,
        backgroundColor: '#F6DD45',
      });
    } else {
      this.setState({
        isSelected: false,
        backgroundColor: '#FFFFFF',
      })
    }
  }

}
export default Die;