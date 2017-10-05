import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CategoryCard from './components/CategoryCard';

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

class Categories extends PureComponent {
  static defaultProps = {
    categories: []
  };

  componentDidMount() {
    if (!this.props.categories) this.props.getCategories();
  }

  renderCards = aCategory => <CategoryCard key={aCategory.id} category={aCategory.name} />;

  render() {
    const { categories } = this.props;
    return (
      <Section>
        {categories && categories.map(this.renderCards)}
      </Section>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array,
  getCategories: PropTypes.func.isRequired
};

export default Categories;
