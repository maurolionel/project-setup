import React from 'react';
import styled from 'styled-components';
import ShoppingList from '../ShoppingList';
import ShippingSelection from '../ShippingSelection';
import Button from '../../../../components/Button';

const tabs = [
  {
    name: '1. Carrito de compras',
    content: () => <ShoppingList />
  },
  {
    name: '2. Método de envío',
    content: () => <ShippingSelection />

  },
  {
    name: '3. Resumen',
    content: () => <p>Tab content 3</p>
  },
  {
    name: '4. Método de pago',
    content: () => <p>Tab content 4</p>
  }
];


const BuyingSteps = () => (
  <Tabs>
    {tabs.map((aTab, index) =>
      <Pane key={index} label={aTab.name}>{aTab.content()}</Pane>
    )}
  </Tabs>
);

const Pane = ({ children }) => <div>{children}</div>;

Pane.propTypes = {
  children: React.PropTypes.element.isRequired
};

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

const ActionGroup = styled.div`
  display: flex;
  justify-content: ${({ hasOnlyChild }) => (hasOnlyChild ? 'flex-end' : 'space-between')};
  width: 100%;
  margin-top: 1rem;
`;

class Tabs extends React.Component {
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
            listStyle: 'none'
          }}
          role="tab"
          aria-controls={`panel${index}`}
        >
          {aLabel.props.label}
        </li>
      );
    }

    return (
      <div>
        <ul role="tablist" style={{ display: 'flex', padding: 0 }}>
          {this.props.children.map(labels.bind(this))}
        </ul>
        <StepIndicator currentStep={this.state.selected + 1} totalSteps={4} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderTitles()}
        <div>
          {this.props.children[this.state.selected]}
        </div>
        <ActionGroup hasOnlyChild={this.state.selected === 0}>
          {this.state.selected > 0
            ? <Button onClick={this.handleClick.bind(this, this.state.selected - 1)}>Volver al paso anterior</Button>
            : null
          }
          <Button primary onClick={this.handleClick.bind(this, this.state.selected + 1)}>Siguiente</Button>
        </ActionGroup>
      </div>
    );
  }
}

export default BuyingSteps;
