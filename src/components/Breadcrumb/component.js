import React from 'react';
import PropTypes from 'prop-types';
import breadcrumbConfig from 'auto-breadcrumb';
import styled from 'styled-components';
import { lighten } from 'polished';
import Anchor from '../Anchor';

const BreadcrumbList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  color: ${({ theme }) => lighten(0.2, theme.gray)};
  font-size: 0.9rem;
`;

const BreadcrumbListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 0;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.base};

  &:after {
    content: '\f105'; /* fontawesome fa-angle-right icon */
    margin: 0 0 0 0.5rem;
    font-family: 'FontAwesome';
  }

  &:last-child:after {
    content: '';
    display: none;
  }
`;

const config = {
  staticRoutesMap: {
    '/': 'Inicio',
    '/productos': 'Productos',
    '/ofertas': 'Ofertas',
    '/soporte': 'Soporte Técnico',
    '/contacto': 'Contacto',
    '/carrito': 'Tu carrito de compras',
    '/ingresar': 'Ingresá a tu cuenta',
    '/registrarse': 'Creá una cuenta'
  },
  dynamicRoutesMap: {
    '/productos/:id': '{{id}}'
  },
  notFound: 'La página no existe',
  Breadcrumb: BreadcrumbList,
  BreadcrumbItem: BreadcrumbListItem,
  LinkComponent: Anchor
};

const AutoBreadcrumb = breadcrumbConfig(config);

const Breadcrumb = ({ pathname }) => (pathname !== '/'
  ? <AutoBreadcrumb pathname={pathname} />
  : null
);

Breadcrumb.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Breadcrumb;
