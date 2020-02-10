import React from 'react';
import './Scoreboard.css';

class Scoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      words: [],
    };
  }
  render() {
    return (
      <table id="scoreboard">
        <tr>
          <th>Word </th>
          <th>Score</th>
        </tr>
        <tr>
          <td>congruent</td>
          <td>11</td>
        </tr>
        <tr>
          <td>urgent</td>
          <td>3</td>
        </tr>
        <tr id="footer">
          <td>Total </td>
          <td>14</td>
        </tr>
      </table>
    );
  }

}
export default Scoreboard;