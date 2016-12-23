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
import { LinkContainer } from 'react-router-bootstrap';

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
              <LinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem eventKey={3}>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <div className={style.App}>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
