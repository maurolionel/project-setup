import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Title from '../Title';
import Button from '../Button';

const ModalPayment = ({ isOpen, onPurchaseEnd }) => isOpen && (
  <Modal isDismissible={false}>
    <Title>¡Gracias por su compra!</Title>
    <p>grax crack!</p>
    <Button onClick={onPurchaseEnd} primary>Finalizar</Button>
  </Modal>
);

ModalPayment.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onPurchaseEnd: PropTypes.func.isRequired
};

export default ModalPayment;
