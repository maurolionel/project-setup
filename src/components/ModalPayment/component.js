import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal';
import Title from '../Title';
import Preloader from '../Preloader';

const Iframe = styled.iframe.attrs({
  frameBorder: 0,
  title: 'MercadoPago'
})`
  width: 100%;
  height: 500px;
  border: 0;
`;

const ModalPayment = ({ url, isOpen, isLoading }) => (
  isOpen
    && (
      <Modal className="mercadopago">
        <Title>Datos para el pago</Title>
        {isLoading ? <Preloader /> : <Iframe src={url} />}
      </Modal>
    )
);

ModalPayment.propTypes = {
  url: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default ModalPayment;
