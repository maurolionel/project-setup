import React from 'react';
import PropTypes from 'prop-types';
import ProductSelect from './components/ProductSelect';
import ProductResult from './components/ProductResult';
import Title from '../../components/Title';

const brandsData = ['Brother', 'Canon', 'Epson', 'Hewelett Packard (HP)'];

const Support = ({ brands }) => (
  <section>
    <Title>Instructivos de instalación y soporte técnico</Title>
    <ProductSelect brands={brandsData} />
    <ProductResult />
  </section>
);

Support.propTypes = {
  brands: PropTypes.array.isRequired
};

export default Support;
