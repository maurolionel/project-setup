import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../components/Preloader';
import Title from '../../components/Title';
import { replaceMiddleDashWithSpace } from '../../services/utils';

class ExploreResult extends PureComponent {
  constructor(props) {
    super(props);
    const query = replaceMiddleDashWithSpace(this.props.match.params.query);
    this.props.exploreGuides(query);
    this.props.exploreProducts(query);
  }
  render() {
    const { guides, match, products, isLoadingResults } = this.props;
    return (
      <div>
        <Title>{`Resultado de la búsqueda para "${match.params.query}"`}</Title>
        {isLoadingResults
          ? <Preloader />
          : (
            <div>
              <div>
                <h4>Encontrado en productos</h4>
                {products.length
                  ? <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>
                  : <p>No se encontraron productos para tu búsqueda.</p>}
              </div>
              <div>
                <h4>Encontrado en instructivos</h4>
                {guides.length
                  ? <ul>{guides.map(g => <li key={g.id}>{g.name}</li>)}</ul>
                  : <p>No se encontraron instructivos para tu búsqueda.</p>}
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

ExploreResult.propTypes = {
  guides: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  isLoadingResults: PropTypes.bool.isRequired,
  exploreGuides: PropTypes.func.isRequired,
  exploreProducts: PropTypes.func.isRequired
};

export default ExploreResult;
