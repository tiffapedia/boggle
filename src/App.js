import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Board from './components/board/Board.js';
import Scoreboard from './components/scoreboard/Scoreboard.js';

import './assets/css/Global.css';
import letterLogo from './images/logo.png';

function App() {
  return (
    <div className='content'>
      <img src={letterLogo} className='center-align logo' />
      <div className='pb1' />
      <div className='outer-center-align'>
        <div id='current-word'>Current Word</div>
        <div className='button'>Submit</div>
      </div>
      <div className='pb1' />
      <Row>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Board />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <Scoreboard />
        </Col>
      </Row>
    </div>
  );
}

export default App;

/*
    <Grid fluid className='page'>
      <Row>
        <img src={letterLogo} className='center-align logo' />
      </Row>
      <Row>
        <div className='center-align'>
          <div id='current-word'>
            Current Word
          </div>
          <div className='button'>
            Submit button
          </div>
        </div>
      </Row>
      <Row>

      </Row>
      <Row className='container'>
        <Col xs={1} sm={1} md={2} lg={2}/>
        <Col xs={1} sm={1} md={5} lg={5}>
        <div id='board'>
          <div class='row'>
            
            <div class='char'>
              asdfasdf
            </div>
          </div>
        </div>
        </Col>
        <Col xs={1} sm={1} md={3} lg={3}>
          <div id='score-table'>
          asdfadfs
          </div>
        </Col>
        <Col xs={1} sm={1} md={2} lg={2}/>
      </Row>
      

    </Grid>
    */
