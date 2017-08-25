import React from 'react';
import PropTypes from 'prop-types';
import breadcrumbConfig from 'auto-breadcrumb';
import styled from 'styled-components';
import { lighten } from 'polished';
import BreadcrumbListItem from './components/BreadcrumbListItem';
import BreadcrumbAnchor from './components/BreadcrumbAnchor';

const BreadcrumbList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  color: ${({ theme }) => lighten(0.2, theme.gray)};
  font-size: 0.9rem;
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
    '/productos/:productId': '{{productId}}'
  },
  notFound: 'La página no existe',
  Breadcrumb: BreadcrumbList,
  BreadcrumbItem: BreadcrumbListItem,
  LinkComponent: BreadcrumbAnchor
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
