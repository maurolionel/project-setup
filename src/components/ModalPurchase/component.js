import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal';
import Button from '../Button';

const Wrapper = styled.div`
  padding: 0 20px 15px;
`;

const Email = styled.p`
  font-weight: 700;
`;

const ModalPayment = ({ email, isOpen, onPurchaseEnd }) => isOpen && (
  <Modal title="¡Gracias por su compra!" isDismissible={false}>
    <Wrapper>
      <p>Te envíamos un mail a</p>
      <Email>{email}</Email>
      <p>con los datos necesarios para concretar la compra.</p>
      <Button onClick={onPurchaseEnd} primary>Finalizar</Button>
    </Wrapper>
  </Modal>
);

ModalPayment.propTypes = {
  email: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPurchaseEnd: PropTypes.func.isRequired
};

export default ModalPayment;
