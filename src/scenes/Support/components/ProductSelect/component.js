import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Autocomplete from '../../../../components/Autocomplete';
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

const Block = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2.5rem;
`;

const FormBlock = Block.withComponent('form');

class ProductSelect extends PureComponent {
  componentDidMount() {
    const { brands, onGetBrands } = this.props;
    if (!brands.length) onGetBrands();
  }

  render() {
    const { brands, productResults, onGetInstructives } = this.props;
    return (
      <Wrapper>
        <Block>
          <Label htmlFor="brands">Marca de tu impresora:</Label>
          {brands.length > 0
            && <Autocomplete
              items={brands}
              placeholder="Buscá la marca"
              onChange={onGetInstructives}
            />
          }
        </Block>
        {productResults.length
          ? <FormBlock onSubmit={this.handleSubmit}>
            <Label htmlFor="model">Modelo de tu impresora:</Label>
            <Autocomplete items={productResults} />
          </FormBlock>
          : null
        }
      </Wrapper>
    );
  }
}

ProductSelect.propTypes = {
  brands: PropTypes.array.isRequired,
  productResults: PropTypes.array.isRequired,
  onGetBrands: PropTypes.func.isRequired,
  onSelectBrand: PropTypes.func.isRequired,
  onGetInstructives: PropTypes.func.isRequired
};

export default ProductSelect;
