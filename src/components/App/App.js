/**
 *   Copyright 2017 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React, { Component } from 'react';
import {
  Grid,
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import Title from '../Title';

import style from './App.styl';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Project name</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
              <NavItem eventKey={3} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <div className={style.App}>
            <Title>My App</Title>
            <p className="lead">Use this document as a way to quickly start any new project.</p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
