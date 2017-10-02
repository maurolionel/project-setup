import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Title from '../Title';

const ModalPayment = ({ isOpen }) => (
  isOpen
    && (
      <Modal className="mercadopago">
        <Title>¡Gracias por su compra!</Title>
        <p>grax crack!</p>
      </Modal>
    )
);

ModalPayment.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default ModalPayment;
