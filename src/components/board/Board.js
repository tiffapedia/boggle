import React, { Component } from 'react';
import Letter from '../letter/Letter';
import './Board.css';
import dice from '../../assets/data/dice.json';

function getRandomDiceOrder(numDice) {
  // generate random dice order

  // create an ascending dice order [0,...,numDice-1]
  var diceOrder = Array.from(Array(numDice)).map((x, i) => i)

  // shuffle the dice order
  var i = numDice;
  var j = 0;
  var temp;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = diceOrder[i];
    diceOrder[i] = diceOrder[j];
    diceOrder[j] = temp;
  }

  return diceOrder;

}

class Board extends Component {

  constructor() {
    super();
    this.state = {
      letters: [],
    };
  }

  componentWillMount() {
    // load letters before rendering
    this.loadLetters();
  }

  render() {

    return (
      <div id='board'>
        <div className='row'>
          {
            this.state.letters.slice(0, 5).map((l, i) => {
              return <Letter letter={l.letter} />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.letters.slice(5, 10).map((l, i) => {
              return <Letter letter={l.letter} />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.letters.slice(10, 15).map((l, i) => {
              return <Letter letter={l.letter} />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.letters.slice(15, 20).map((l, i) => {
              return <Letter letter={l.letter} />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.letters.slice(20, 25).map((l, i) => {
              return <Letter letter={l.letter} />
            })
          }
        </div>

      </div>
    )
  }

  loadLetters = () => {

    // 5x5 = 25 dices total on board
    const numDices = dice.length;
    //console.log('num of dices', numDices);

    var letters = [];
    var randomDie, randomFace;

    // get random dice order
    var randomDiceOrder = getRandomDiceOrder(numDices);
    // iterate through random dice order
    for (var i = 0; i < randomDiceOrder.length; i++) {
      // select a random die from 25 dice
      randomDie = randomDiceOrder[i];
      //console.log('random die', randomDie);
      // select a random face from 6 faces of a die
      randomFace = Math.floor(Math.random() * 6);
      //console.log('random face', randomFace);
      // add the random die's face to list of letters
      if (dice[randomDie][randomFace] === 'q') {
        // the letter "q" is displayed as "qu"
        letters.push({
          letter: 'Qu',
          key: letters.length,
        })
      } else {
        letters.push({
          letter: dice[randomDie][randomFace].toUpperCase(),
          key: letters.length,
        })
      }
    }
    console.log('load letters', letters);
    this.setState({ letters: letters });
  }
}
export default Board;