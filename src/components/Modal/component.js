import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import Paper from '../Paper';

const Wrapper = styled.button`
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: none;
  border: 0;
  outline: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled(Paper)`
  position: relative;
  z-index: 1000;
  min-width: 400px;
  min-height: 150px;
  margin: 1rem;
  &.mercadopago {
    width: 100%;
    max-width: 800px;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.grayDark};
  background: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s color;
  &:hover {
    color: ${({ theme }) => darken(0.1, theme.grayDark)};
  }
`;

class Modal extends Component {
  static defaultProps = {
    className: ''
  }

  closeWhenEscape = (event) => {
    if (event.keyCode === 27) {
      this.props.onCloseAll();
    }
  };

  render() {
    return (
      <Wrapper onKeyDown={this.closeWhenEscape} autoFocus>
        <Overlay onClick={this.props.onCloseAll} />
        <Content className={this.props.className}>
          <ButtonClose onClick={this.props.onCloseAll}>
            <i className="fa fa-close" />
          </ButtonClose>
          {this.props.children}
        </Content>
      </Wrapper>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onCloseAll: PropTypes.func.isRequired
};

export default Modal;
