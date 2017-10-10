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

import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import FilterProduct from './components/FilterProduct';
import About from './components/About';
import Contact from './components/Contact';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/filter" component={FilterProduct} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Route>
);
