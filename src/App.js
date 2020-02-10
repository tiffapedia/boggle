import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Board from './components/board/Board.js';
import Scoreboard from './components/scoreboard/Scoreboard.js';

import './assets/css/Global.css';
import letterLogo from './images/logo.png';

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
          <div className='button'>Submit</div>
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
}

export default App;
