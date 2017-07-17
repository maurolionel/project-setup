import React from 'react';
import ProductSelect from './components/ProductSelect';

const brandsData = ['Brother', 'Canon', 'Epson', 'Hewelett Packard (HP)'];

const Support = () => (
  <section>
    <ProductSelect brands={brandsData} />
  </section>
);

export default Support;
