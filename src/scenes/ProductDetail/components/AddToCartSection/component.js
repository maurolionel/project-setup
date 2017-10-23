import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { FormattedNumber } from 'react-intl';
import StockLabel from '../../../../components/StockLabel';
import Input from '../../../../components/Input';
import ButtonCart from '../../../../components/ButtonCart';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';
import Alert from '../../../../components/Alert';

const Form = styled.form`
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
  min: 1
}) `
  width: 3.3rem;
  padding: 0.5rem 0 0.5rem 0.6rem;
  margin-right: 1rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) => darken(0.5, theme.grayLighter)};
`;

class AddToCartSection extends PureComponent {
  defaultValue = 1;

  registerQuantityInputRef = (ref) => { this.quantityInput = ref; };

  handleSubmit = (event) => {
    event.preventDefault();
    const offset = 1;
    this.props.onSubmitQuantity(this.quantityInput.value - offset);
    this.resetQuantity();
  }

  resetQuantity = () => { this.quantityInput.value = this.defaultValue; }

  render() {
    const { product } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <StockLabel withStock={product.hasStock} />
        <Name>{product.name}</Name>
        <p>{product.description}</p>
        <Price><FormattedNumber value={product.price} style="currency" currency="USD" /></Price>
        {product.hasStock
          ? (<div>
            <QuantityWrapper>
              <QuantityLabel>Cantidad:</QuantityLabel>
              <Quantity>
                <QuantityInput innerRef={this.registerQuantityInputRef} defaultValue={this.defaultValue} />
                <ButtonCart type="submit" productId={product.id} />
              </Quantity>
            </QuantityWrapper>
          </div>)
          : <Alert kind="danger">Por el momento no contamos con stock de este producto.</Alert>
        }
      </Form>
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
