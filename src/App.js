import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';
import BoggleLogo from './images/logo.png';

function App() {
  return (
    <div className='content'>        
      <img src={BoggleLogo} className='center-align logo' />
      <div className='padding'/>
      <div className='outer-center-align'>      
        <div id='current-word'>Current Word</div>
        <div className='button'>Submit</div>
      </div>
      <div className='padding'/>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8}>
        <div id='board'>
          <div class='row'>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
          </div>
          <div class='row'>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
          </div>
          <div class='row'>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
          </div>
          <div class='row'>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
          </div>
          <div class='row'>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
            <div class='boggle'><span>A</span></div>
          </div>
        </div>
          
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
        <table id="score-table">
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
        </Col>


      </Row>
    </div>


    
  );
}

export default App;

/*
    <Grid fluid className='page'>
      <Row>
        <img src={BoggleLogo} className='center-align logo' />
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
