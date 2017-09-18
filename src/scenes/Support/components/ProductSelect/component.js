import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '../../../../components/Select';
import Input from '../../../../components/Input';
import Label from '../../../../components/Label';
import Autocomplete from './downshift';

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

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

class ProductSelect extends PureComponent {
  componentDidMount() {
    const { brands, onGetBrands } = this.props;
    if (!brands.length) onGetBrands();
  }

  handleInputChange = ({ target: { value } }) => this.setState({ query: value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onGetInstructives(this.state.query);
  }

  render() {
    const { brands, onSelectBrand } = this.props;
    return (
      <Wrapper>
        <InputBlock>
          <Label htmlFor="brands">Marca de tu impresora:</Label>
          {brands.length > 0
            && (
              <Autocomplete
                items={brands}
                placeholder="Buscá la marca"
                onChange={onSelectBrand}
              />
            )
          }
        </InputBlock>
        <FormBlock onSubmit={this.handleSubmit}>
          <Label htmlFor="model">Modelo de tu impresora:</Label>
          <Input
            id="model"
            type="search"
            placeholder="Buscá el modelo"
            onChange={this.handleInputChange}
          />
        </FormBlock>
      </Wrapper>
    );
  }
}

ProductSelect.propTypes = {
  brands: PropTypes.array.isRequired,
  onGetBrands: PropTypes.func.isRequired,
  onSelectBrand: PropTypes.func.isRequired,
  onGetInstructives: PropTypes.func.isRequired
};

export default ProductSelect;
