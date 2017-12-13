import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TopBarNavLink from './components/TopBarNavLink';
import ShoppingCartBadge from '../ShoppingCartBadge';
import Icon from '../../../../../../components/Icon';
import CartPopover from '../../../../../../components/CartPopover';

const StyledTopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.desktop}px;
  margin: 0 auto;
  font-size: 0.9rem;
`;

const TopBarSection = styled.div`
  display: flex;
`;

const TopBarLink = TopBarNavLink.withComponent(Link);

class TopBar extends PureComponent {
  openModalSchedules = (event) => {
    event.preventDefault();
    this.props.onOpenModalSchedules();
  };

  openModalShippings = (event) => {
    event.preventDefault();
    this.props.onOpenModalShippings();
  };

  showCartPopover = () => {
    this.props.onShowCartPopover();
  }

  hideCartPopover = () => {
    this.props.onHideCartPopover();
  }

  render() {
    return (
      <StyledTopBar>
        <TopBarSection>
          <TopBarLink to="#" onClick={this.openModalSchedules} title="Conocé nuestros horarios de atención">
            <Icon className="fa fa-clock-o" />
            Horarios
          </TopBarLink>
          <TopBarLink to="#" onClick={this.openModalShippings} title="Conocé nuestros métodos de envío">
            <Icon className="fa fa-truck" />
            Métodos de envío
          </TopBarLink>
          <TopBarLink to="/contacto" title="Llamanos, ¡tu consulta no molesta!">
            <Icon className="fa fa-phone" />
            Teléfono: (011) 3220.0500
          </TopBarLink>
        </TopBarSection>
        <TopBarSection onMouseLeave={this.hideCartPopover} onMouseEnter={this.showCartPopover}>
          <TopBarNavLink to="/carrito" title="Tu carrito de compras">
            <Icon className="fa fa-shopping-cart" placement="left" />
            Carrito
            <ShoppingCartBadge quantity={this.props.totalProducts} />
          </TopBarNavLink>
          <CartPopover />
        </TopBarSection>
      </StyledTopBar>
    );
  }
}

TopBar.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  onHideCartPopover: PropTypes.func.isRequired,
  onOpenModalSchedules: PropTypes.func.isRequired,
  onOpenModalShippings: PropTypes.func.isRequired,
  onShowCartPopover: PropTypes.func.isRequired
};

export default TopBar;
