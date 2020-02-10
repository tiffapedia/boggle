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
    };
  }

  render() {
    return (
      <div className='content'>
        <img src={letterLogo} alt='boggle logo' className='center-align logo' />
        <div className='pb1' />
        <div className='outer-center-align'>
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
            />
          </Col>
          <Col xs={10} sm={10} md={4} lg={4}>
            <Scoreboard />
          </Col>
          <Col xs={1} sm={1} md={0} lg={0} />
        </Row>
      </div>
    );
  }

  changeCurrentWord = (currentWord) => {
    console.log('changeCurrentWord', currentWord);
    this.setState({ currentWord: currentWord });
  }

  submitWord = () => {
    console.log('submitWord', this.state.currentWord);

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
        console.log(this.state.currentWord, 'is a valid word');
      }
    }).catch(err => {
      console.log(this.state.currentWord, 'is an INVALID word');
    })


  }

}

export default App;
