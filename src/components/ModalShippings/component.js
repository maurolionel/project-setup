import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Title from '../Title';

const ModalShippings = ({ isOpen }) => (
  isOpen
    ? (
      <Modal>
        <Title>Métodos de envío</Title>
        <img src="http://www.imprek.com.ar/imagenes/envios-horarios.png" alt="Métodos de envío" />
      </Modal>
    )
    : null
);

ModalShippings.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default ModalShippings;
