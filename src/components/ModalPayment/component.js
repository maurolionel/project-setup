import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal';
import Preloader from '../Preloader';
import Button from '../Button';

const Iframe = styled.iframe.attrs({
  frameBorder: 0,
  title: 'MercadoPago'
})`
  width: 100%;
  height: 500px;
  border: 0;
`;

const ModalPayment = ({ url, isOpen, isLoading, onPurchaseEnd }) => isOpen && (
  <Modal className="mercadopago" title="Datos para el pago" isDismissible={false}>
    {isLoading
      ? <Preloader />
      : <div>
        <Iframe src={url} />
        <Button onClick={onPurchaseEnd} primary>Finalizar compra</Button>
      </div>
    }
  </Modal>
);

ModalPayment.propTypes = {
  url: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPurchaseEnd: PropTypes.func.isRequired
};

export default ModalPayment;
