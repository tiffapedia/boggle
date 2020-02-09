import React from 'react';
import './Letter.css';

class Letter extends React.Component {

  render() {
    return (
      <div class='letter'>
        <span>{this.props.letter}</span>
      </div>
    )
  }
}
export default Letter;