import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.button`
  border: 0;
  outline: 0;
  background: none;
  cursor: pointer;
`;

const Content = styled.p`
  opacity: 1;
  max-height: 500px;
  transition-property: max-height, margin, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  &.is-collapsed {
    overflow: hidden;
    opacity: 0;
    max-height: 0;
    margin: 0;
  }
`;

class Collapsible extends PureComponent {
  state = {
    isContentCollapsed: true
  };

  toggleContentVisibility = () => {
    this.setState(prevState => ({
      isContentCollapsed: !prevState.isContentCollapsed
    }));
  };

  render() {
    const { title, content } = this.props;
    return (
      <div>
        <Title onClick={this.toggleContentVisibility}>{title}</Title>
        <Content className={this.state.isContentCollapsed ? 'is-collapsed' : ''}>{content}</Content>
      </div>
    );
  }
}

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Collapsible;
