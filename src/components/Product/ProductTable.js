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

import React, { Component, PropTypes } from 'react';
import ProductRow from './ProductRow';
import products from '../../data/products';

class ProductTable extends Component {
  static propTypes = {
    filter: PropTypes.string
  };

  renderProducts() {
    let productRows = [];

    products.forEach((product) => {
      const productName = product.name.toLowerCase();
      const filter = this.props.filter.toLowerCase();

      if (productName.indexOf(filter) !== -1) {
        productRows.push(
          <ProductRow key={productName} product={product} />
        );
      }
    });

    return productRows;
  }

  render() {
    return (
      <div>
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductTable;
