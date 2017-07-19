import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../components/Input';

const renderBrandOption = (aBrand, index) => (
  <option key={index}>{aBrand}</option>
);

const ProductSelect = ({ brands }) => (
  <div>
    <select>
      {brands.map(renderBrandOption)}
    </select>
    <Input type="search" placeholder="Buscar modelo" />
    <Input type="submit" value="Buscar" primary />
  </div>
);

ProductSelect.propTypes = {
  brands: PropTypes.array.isRequired
};

export default ProductSelect;
