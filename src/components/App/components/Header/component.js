import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 500;
  width: 100%;
`;

const TopBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;

const navBarStyleWhenFixed = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 1px 8px -3px rgba(0, 0, 0, .2);
`;

const NavBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.base};
  border-bottom: 1px solid ${({ theme }) => darken(0.04, theme.whiteGray)};
  transition: 0.25s box-shadow ease;
  ${({ isFixed }) => isFixed && navBarStyleWhenFixed};
`;

class Header extends Component {
  state = {
    isNavBarFixed: false
  }
  borderBottomWidth = 1;

  registerHeaderRef = (node) => {
    this.headerElement = node;
    const headerHeight = this.headerElement.clientHeight;
    this.props.onHeaderLayout(headerHeight - this.borderBottomWidth);
  }

  registerTopBarRef = (node) => {
    this.topBarElement = node;
    window.addEventListener('scroll', () => {
      const isNavBarFixed = (window.scrollY + 2) >= this.topBarElement.clientHeight;
      this.setState({ isNavBarFixed });
    });
  }

  render() {
    const { isNavBarFixed } = this.state;
    return (
      <Wrapper
        className={isNavBarFixed ? 'is-fixed' : ''}
        innerRef={this.registerHeaderRef}
      >
        <TopBarWrapper innerRef={this.registerTopBarRef}>
          <TopBar />
        </TopBarWrapper>
        <NavBarWrapper isFixed={isNavBarFixed}>
          <NavBar isFixed={isNavBarFixed} />
        </NavBarWrapper>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  onHeaderLayout: PropTypes.func.isRequired
};

export default Header;
