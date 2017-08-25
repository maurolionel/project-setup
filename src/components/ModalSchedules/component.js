import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Title from '../Title';

const ModalSchedules = ({ isOpen }) => (
  isOpen
    ? (
      <Modal>
        <Title>Horarios de atención</Title>
        <img src="http://www.imprek.com.ar/Horario.jpg" alt="Horarios" />
      </Modal>
    )
    : null
);

ModalSchedules.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default ModalSchedules;
