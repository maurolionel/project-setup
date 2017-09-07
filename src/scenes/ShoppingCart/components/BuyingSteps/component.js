import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShoppingList from '../ShoppingList';
import ShippingSelection from '../ShippingSelection';
import Summary from '../Summary';

const StepIndicator = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.grayLighter};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => `calc(100% / ${props.totalSteps} * ${props.currentStep})`};
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.5s ease-in-out;
  }
`;

const Pane = ({ children }) => <div>{children}</div>;

Pane.propTypes = {
  children: PropTypes.element.isRequired
};

const BuyingSteps = () => (
  <Tabs>
    <Pane label="Carrito de compras" />
    <Pane label="Método de envío" />
    <Pane label="Resumen" />
    <Pane label="Pago y confirmación" />
  </Tabs>
);

class Tabs extends Component {
  state = {
    selected: 0
  };

  handleClick(index) {
    this.setState({
      selected: index
    });
  }

  renderTitles() {
    function labels(aLabel, index) {
      const isActive = this.state.selected === index;
      return (
        <li
          key={index}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            fontWeight: isActive ? '700' : 400,
            listStyle: 'none'
          }}
          role="tab"
          aria-controls={`panel${index}`}
        >
          {`${index + 1}. ${aLabel.props.label}`}
        </li>
      );
    }

    return (
      <div>
        <ul role="tablist" style={{ display: 'flex', padding: 0 }}>
          {this.props.children.map(labels.bind(this))}
        </ul>
        <StepIndicator currentStep={this.state.selected + 1} totalSteps={this.props.children.length} />
      </div>
    );
  }

  renderPanes = () => {
    if (this.state.selected === 0) {
      return (
        <Pane>
          <ShoppingList
            onNextStep={() => this.handleClick(this.state.selected + 1)}
          />
        </Pane>
      );
    }
    if (this.state.selected === 1) {
      return (
        <Pane>
          <ShippingSelection
            onPrevStep={() => this.handleClick(this.state.selected - 1)}
            onNextStep={() => this.handleClick(this.state.selected + 1)}
          />
        </Pane>
      );
    }
    if (this.state.selected === 2) {
      return (
        <Pane>
          <Summary
            onPrevStep={() => this.handleClick(this.state.selected - 1)}
            onNextStep={() => this.handleClick(this.state.selected + 1)}
          />
        </Pane>
      );
    }
    return <p>4</p>;
  }

  render() {
    return (
      <div>
        {this.renderTitles()}
        <div>
          {this.renderPanes()}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.any.isRequired
};

export default BuyingSteps;
