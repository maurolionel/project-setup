import React from 'react';
import PropTypes from 'prop-types';
import ProductSelect from './components/ProductSelect';
import ProductResult from './components/ProductResult';
import Title from '../../components/Title';

const Support = ({ isShowingResults }) => (
  <section>
    <Title>Instructivos de instalación y soporte técnico</Title>
    <ProductSelect />
    {isShowingResults && <ProductResult />}
  </section>
);

Support.propTypes = {
  isShowingResults: PropTypes.bool.isRequired
};

export default Support;
