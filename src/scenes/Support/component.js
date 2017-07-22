import React from 'react';
import ProductSelect from './components/ProductSelect';
import Title from '../../components/Title';

const brandsData = ['Brother', 'Canon', 'Epson', 'Hewelett Packard (HP)'];

const Support = () => (
  <section>
    <Title>Instructivos de instalación y soporte técnico</Title>
    <ProductSelect brands={brandsData} />
  </section>
);

export default Support;
