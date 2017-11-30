import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const ModalSchedules = ({ isOpen }) => (
  isOpen
    ? (
      <Modal title="Horarios de atención">
        <img src="http://www.imprek.com.ar/Horario.jpg" alt="Horarios" />
      </Modal>
    )
    : null
);

ModalSchedules.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default ModalSchedules;
