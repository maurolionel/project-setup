import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import StockLabel from '../../../../components/StockLabel';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Link from '../../../../components/Link';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';

const Wrapper = styled.form`
  flex: 1 1 40%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.base};
`;

const Name = styled(Title)`
  margin: 1rem 0 0;
  font-size: 1.8rem;
`;

const Price = styled.span`
  display: block;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
`;

const QuantityWrapper = styled.div`
  margin: 1.5rem 0 1rem;
`;

const QuantityLabel = styled(Label)`
  margin-bottom: 5px;
  font-size: 0.75rem;
  font-weight: 300;
  text-transform: capitalize;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityInput = styled(Input).attrs({
  type: 'number',
  defaultValue: 1,
  min: 1
}) `
  width: 3.3rem;
  padding: 0.5rem 0 0.5rem 0.6rem;
  margin-right: 1rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) => darken(0.5, theme.grayLighter)};
`;

const ShopIcon = styled.i.attrs({
  className: 'fa fa-shopping-cart'
}) `
  margin: -1px 0.5rem 0 0;
  font-size: 1rem;
`;

class AddToCartSection extends PureComponent {
  registerQuantityInputRef = ref => (this.quantityInput = ref);
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitQuantity(this.props.product.id, this.quantityInput.value);
  }
  render() {
    const { product } = this.props;
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <StockLabel withStock={product.hasStock} />
        <Name>{product.name}</Name>
        <p>{product.description}</p>
        <Price>$ {product.price}</Price>
        {product.hasStock
          ? (<div>
            <QuantityWrapper>
              <QuantityLabel>Cantidad:</QuantityLabel>
              <Quantity>
                <QuantityInput innerRef={this.registerQuantityInputRef} />
                <Button type="submit" disabled><ShopIcon />Agregar al carrito</Button>
              </Quantity>
            </QuantityWrapper>
            <Link to="/carrito" primary>Comprar</Link>
          </div>)
          : <p>Por el momento no contamos con stock de este producto.</p>
        }
      </Wrapper>
    );
  }
}

AddToCartSection.propTypes = {
  product: PropTypes.object,
  onSubmitQuantity: PropTypes.func.isRequired
};

AddToCartSection.defaultProps = {
  product: {
    name: '',
    price: ''
  }
};

export default AddToCartSection;
