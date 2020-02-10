import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Board from './components/board/Board.js';
import Scoreboard from './components/scoreboard/Scoreboard.js';

import './assets/css/Global.css';
import letterLogo from './images/logo.png';


const wordsAPI = axios.create({
  baseURL: 'https://wordsapiv1.p.mashape.com',
  headers: {
    "X-Mashape-Key": "Wybi9HM9oymshDPqZtPamRYHDZnOp1fD3y0jsnpHO6nHH78GMt",
    "X-Mashape-Host": "wordsapiv1.p.mashape.com"
  }
});


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentWord: '',
      words: [],
      scores: [],
      totalScore: 0,
      errorMsg: '',
      resetBoard: false,
    };
  }

  render() {
    return (
      <div className='content'>
        <img src={letterLogo} alt='boggle logo' className='center-align logo' />
        <div className='pb1' />
        <div className='outer-center-align'>
          <div>
            {this.state.errorMsg}
          </div>
          <div id='current-word'>
            {this.state.currentWord.length == 0 ? 'Current Word' : this.state.currentWord}
          </div>
          <div className='button' onClick={this.submitWord}>Submit</div>
        </div>
        <div className='pb1' />
        <Row style={{ padding: '0' }}>
          <Col xs={1} sm={1} md={0} lg={0} />
          <Col xs={10} sm={10} md={8} lg={8}>
            <Board
              currentWord={this.state.currentWord}
              changeCurrentWord={this.changeCurrentWord}
              resetBoard={this.state.resetBoard}
            />
          </Col>
          <Col xs={10} sm={10} md={3} lg={3}>
            <Scoreboard
              words={this.state.words}
              scores={this.state.scores}
              totalScore={this.state.totalScore}
            />
          </Col>
          <Col xs={1} sm={1} md={0} lg={0} />
        </Row>
      </div>
    );
  }

  changeCurrentWord = (currentWord) => {
    console.log('changeCurrentWord', currentWord);
    this.setState({ currentWord: currentWord });
    if (this.state.errorMsg.length > 0) {
      this.setState({ errorMsg: '' });
    }
    if (this.state.resetBoard) {
      this.setState({ resetBoard: false });
    }
  }

  submitWord = () => {
    console.log('submitWord', this.state.currentWord);
    if (this.state.currentWord.length > 0) {

      axios({
        method: 'get',
        url: `https://wordsapiv1.p.mashape.com/words/${this.state.currentWord}/definitions`,
        headers: {
          "X-Mashape-Key": "Wybi9HM9oymshDPqZtPamRYHDZnOp1fD3y0jsnpHO6nHH78GMt",
          "X-Mashape-Host": "wordsapiv1.p.mashape.com"
        }
      }).then((res) => {
        //only get word with definitions
        if (res.data.definitions) {
          // this is a valid word
          console.log('valid word: ', this.state.currentWord);
          // append to list of words
          var words = this.state.words.slice();
          words.push(this.state.currentWord.charAt(0) + this.state.currentWord.slice(1).toLowerCase());
          console.log('words', words);
          // calculate current word's score
          const currentWordScore = this.calculateScore(this.state.currentWord);
          // append to list of scores
          var scores = this.state.scores.slice();
          scores.push(currentWordScore);
          var totalScore = this.state.totalScore + currentWordScore;
          this.setState({
            words: words,
            currentWord: '',
            scores: scores,
            totalScore: totalScore,
            resetBoard: true,
          });
        }
        console.log(res)
      }).catch(err => {
        // this is an invalid word
        console.log('invalid word');
        this.setState({ errorMsg: `${this.state.currentWord} is an invalid word` });
      })
    }

  }

  calculateScore = (word) => {
    console.log('calculateScore', word);
    const numLetters = word.length;
    switch (numLetters) {
      case 0:
        return 0;
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 1;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 3;
      case 7:
        return 5;
      default:
        return 11;
    }
  }

}

export default App;
