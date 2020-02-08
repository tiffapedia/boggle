import React from 'react';
import Letter from '../letter/Letter';
import './Board.css';

class Board extends React.Component {

  render() {
    return (
      <div id='board'>
        <div class='row'>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
        <div class='row'>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
        <div class='row'>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
        <div class='row'>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
        <div class='row'>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
      </div>
    )
  }
}
export default Board;