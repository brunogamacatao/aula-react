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
import { ProductTable } from '../Product';

class FilterProduct extends Component {
  onFilter(event) {
    event.preventDefault();

    console.log(this.filter.value);
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formFilterProduct">
            <ControlLabel>Filter Product</ControlLabel>
            <FormControl
              type="text"
              inputRef={(input) => this.filter = input}
              onChange={(e) => this.onFilter(e)}
              placeholder="Enter a product name"
            />
          </FormGroup>
        </form>
        <ProductTable filter="test" />
      </div>
    );
  }
}

export default FilterProduct;
