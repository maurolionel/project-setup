import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../../../../components/Link';
import Title from '../../../../components/Title';
import config from '../../../../config';
import { replaceMiddleDashWithSpace } from '../../../../services/utils';

const CardLink = styled(Link)`
  flex-basis: 30%;
  margin-bottom: 2.5rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2), 0 -1px 3px 1px rgba(0,0,0,0.1);
    transform: translateY(-10px);
  }
  &:focus {
    background-color: ${({ theme }) => theme.base};
  }
`;

const Picture = styled.img`
  height: 220px;
  margin: 0 auto;
`;

const Name = styled(Title)`
  text-align: center;
  text-transform: capitalize;
`;

const CategoryCard = ({ category }) => (
  <CardLink to={`/productos/${category.name}`}>
    <Picture src={`${config.api.path}images/${category.id}/cover.jpg`} />
    <Name>{replaceMiddleDashWithSpace(category.name)}</Name>
  </CardLink>
);

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default CategoryCard;
