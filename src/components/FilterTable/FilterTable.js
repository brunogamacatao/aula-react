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
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

class FilterTable extends Component {
  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formFilterTable">
            <ControlLabel>Filter Table</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter a product name"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default FilterTable;
