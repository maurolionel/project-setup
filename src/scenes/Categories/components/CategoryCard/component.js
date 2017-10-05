import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../../../../components/Link';
import Title from '../../../../components/Title';
import { replaceMiddleDashWithSpace } from '../../../../services/utils';

const CardLink = styled(Link)`
  flex-basis: 30%;
  margin-bottom: 2.5rem;
`;

const Picture = styled.img`
  width: 100%;
  height: 220px;
`;

const Name = styled(Title)`
  text-align: center;
  text-transform: capitalize;
`;

const CategoryCard = ({ category }) => (
  <CardLink to={`/productos/${category}`}>
    <Picture />
    <Name>{replaceMiddleDashWithSpace(category)}</Name>
  </CardLink>
);

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired
};

export default CategoryCard;
