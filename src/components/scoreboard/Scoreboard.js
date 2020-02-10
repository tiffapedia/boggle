import React from 'react';
import './Scoreboard.css';

class Scoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div id='scoreboard-container'>
        <table id='scoreboard'>
          <tr>
            <th>Word </th>
            <th>Score</th>
          </tr>
          {
            this.props.words.slice().map((word, i) => {
              return (
                <tr>
                  <td>{word}</td>
                  <td>{this.props.scores[i]}</td>
                </tr>
              )
            })
          }
          <tr id='footer'>
            <td>Total</td>
            <td>{this.props.totalScore}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Scoreboard;