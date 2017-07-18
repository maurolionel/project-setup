import React from 'react';
import PropTypes from 'prop-types';

const renderBrandOption = (aBrand, index) => (
  <option key={index}>{aBrand}</option>
);

const ProductSelect = ({ brands }) => (
  <div>
    <select>
      {brands.map(renderBrandOption)}
    </select>
    <input type="search" placeholder="Buscar modelo" />
    <input type="submit" value="Buscar" />
  </div>
);

ProductSelect.propTypes = {
  brands: PropTypes.array.isRequired
};

export default ProductSelect;
