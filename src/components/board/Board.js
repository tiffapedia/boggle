import React, { Component } from 'react';
import Die from '../die/Die';
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
      // die: { letter, key (die's index on grid), clickable }
      dice: [],
      currentKeys: [],
    };
  }

  componentWillMount() {
    // load letters before rendering
    this.loadNewBoard();
  }

  componentWillReceiveProps(props) {
    // reset board
    console.log('componentWillReceiveProps: resetBoard: ', props.resetBoard);
    if (props.resetBoard) {
      this.resetBoard();
    }
  }

  render() {

    // TODO: figure out a better way to code board
    return (
      <div id='board'>
        <div className='row'>
          {
            this.state.dice.slice(0, 5).map((die, i) => {
              return <Die
                die={die}
                addToCurrentWord={this.addToCurrentWord}
                removeFromCurrentWord={this.removeFromCurrentWord}
                resetBoard={this.props.resetBoard}
              />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.dice.slice(5, 10).map((die, i) => {
              return <Die
                die={die}
                addToCurrentWord={this.addToCurrentWord}
                removeFromCurrentWord={this.removeFromCurrentWord}
                resetBoard={this.props.resetBoard}
              />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.dice.slice(10, 15).map((die, i) => {
              return <Die
                die={die}
                addToCurrentWord={this.addToCurrentWord}
                removeFromCurrentWord={this.removeFromCurrentWord}
                resetBoard={this.props.resetBoard}
              />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.dice.slice(15, 20).map((die, i) => {
              return <Die
                die={die}
                addToCurrentWord={this.addToCurrentWord}
                removeFromCurrentWord={this.removeFromCurrentWord}
                setStateForDieSelection={this.setStateForDieSelection}
              />
            })
          }
        </div>
        <div className='row'>
          {
            this.state.dice.slice(20, 25).map((die, i) => {
              return <Die
                die={die}
                addToCurrentWord={this.addToCurrentWord}
                removeFromCurrentWord={this.removeFromCurrentWord}
                resetBoard={this.props.resetBoard}
              />
            })
          }
        </div>

      </div>
    )
  }

  loadNewBoard = () => {

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
          clickable: true,
          isSelected: false,
        })
      } else {
        letters.push({
          letter: dice[randomDie][randomFace].toUpperCase(),
          key: letters.length,
          clickable: true,
          isSelected: false,
        })
      }
    }

    console.log('load letters', letters);
    this.setState({ dice: letters });
  }

  addToCurrentWord = (die) => {
    console.log('addToCurrentWord', die);

    if (die.clickable) {
      // make adjacent dice clickable
      this.makeAdjacentDiceClickable(die, this.state.currentKeys);
      // add die's letter to current word
      var currentKeys = this.state.currentKeys.slice();
      currentKeys.push(die.key);
      // set state
      this.setState({ currentKeys: currentKeys });
      this.props.changeCurrentWord(this.props.currentWord.concat(die.letter));
    }
  }

  removeFromCurrentWord = (die) => {
    console.log('removeFromCurrentWord', die);

    // remove die's letter from current word
    var currentKeys = this.state.currentKeys.slice();
    const removeDieIndex = currentKeys.pop();
    // make adjacent dice clickable
    const lastDieIndex = currentKeys[currentKeys.length - 1];
    if (lastDieIndex == undefined) {
      this.makeAllDiceClickable();
    } else {
      const lastDie = this.state.dice[lastDieIndex];
      const actualCurrentKeys = this.state.currentKeys.slice(0, this.state.currentKeys.indexOf(lastDie.key));
      this.makeAdjacentDiceClickable(lastDie, actualCurrentKeys);
    }
    // set state
    this.setState({ currentKeys: currentKeys });
    const removeDie = this.state.dice[removeDieIndex];
    if (removeDie.letter === 'Qu') {
      this.props.changeCurrentWord(this.props.currentWord.slice(0, -2));
    } else {
      this.props.changeCurrentWord(this.props.currentWord.slice(0, -1));
    }
  }

  makeAdjacentDiceClickable(die, actualCurrentKeys) {

    // enable adjacent dice but for 
    // 1. top row: do not enable anything up (up, up left, up right)
    //    topRowCheck = i - 5 < 0;
    // 2. bottom row: do not enable anything down (down, down left, down right)
    //    bottomRowCheck = i + 5 >= 25;
    // 3. left column: do not enable anything left (left, up left, down left)
    //    leftColCheck = i % 5 === 0;
    // 4. right column: do not enable anything right (right, up right, down right)
    //    rightColCheck = i % 5 === 4;
    // only care about left and column check 
    // why? anything before top row and after bottom row doesn't exist

    var keepClickable = [];
    const key = die.key;

    // up: i - 5
    const uClickable = key - 5;
    // down: i + 5
    const dClickable = key + 5;
    // left: i - 1
    const lClickable = key - 1;
    // right: i + 1
    const rClickable = key + 1;
    // up left: i - 5 - 1 = i - 6
    const ulClickable = key - 6;
    // up right: i - 5 + 1 = i - 4
    const urClickable = key - 4;
    // down left: i + 5 - 1 = i + 4
    const dlClickable = key + 4;
    // down right: i + 5 + 1 = i + 6
    const drClickable = key + 6;

    switch (key % 5) {
      case 0:
        // die is on the left column
        // do not enable anything left (left, up left, down left)
        keepClickable = [key, uClickable, dClickable, rClickable, urClickable, drClickable];
        break;
      case 4:
        // die is on the right column
        // do not enable anything right (right, up right, down right)
        keepClickable = [key, uClickable, dClickable, lClickable, ulClickable, dlClickable];
        break;
      default:
        // die is in the middle
        keepClickable = [key, uClickable, dClickable, lClickable, rClickable, ulClickable, urClickable, dlClickable, drClickable];
    }

    // make a copy of dice to change their clickable state
    var dice = this.state.dice.slice();
    dice.forEach((die, dieIndex) => {
      // enable die to be clickable if it's in keepClickable and not part of current word
      if (keepClickable.includes(die.key) && !actualCurrentKeys.includes(die.key)) {
        die.clickable = true;
      } else {
        die.clickable = false;
      }
    });

    // update clickable state
    this.setState({ dice: dice })
    console.log('makeAdjacentDiceClickable', die.key, dice);
  }

  makeAllDiceClickable = () => {
    var dice = this.state.dice.slice();
    dice.forEach((die, dieIndex) => {
      die.clickable = true;
      die.isSelected = false;
    });
    this.setState({ dice: dice });
  }

  resetBoard = () => {
    console.log('reset board');
    this.makeAllDiceClickable();
    this.setState({ currentKeys: [] });
  }

}
export default Board;