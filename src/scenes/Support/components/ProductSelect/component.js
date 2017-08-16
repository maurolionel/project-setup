import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '../../../../components/Select';
import Input from '../../../../components/Input';
import Label from '../../../../components/Label';

const Wrapper = styled.div`
  display: flex;
  & > :nth-child(1) {
    flex: 0 0 25%;
    margin-right: 1rem;
  }
  & > :nth-child(2) {
    flex: 1;
  }
  select,
  input {
    height: 40px;
  }
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const renderBrandOption = aBrand => (
  <option key={aBrand.id} value={aBrand.id}>{aBrand}</option>
);

const ProductSelect = ({ brands }) => (
  <Wrapper>
    <InputBlock>
      <Label htmlFor="brands">Seleccione la marca:</Label>
      <Select id="brands">
        {brands.map(renderBrandOption)}
      </Select>
    </InputBlock>
    <InputBlock>
      <Label htmlFor="model">Busque y seleccione el modelo:</Label>
      <Input id="model" type="search" placeholder="Buscar y seleccionar modelo" />
    </InputBlock>
  </Wrapper>
);

ProductSelect.propTypes = {
  brands: PropTypes.array.isRequired
};

export default ProductSelect;
