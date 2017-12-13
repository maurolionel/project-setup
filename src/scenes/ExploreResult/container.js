import { connect } from 'react-redux';
import ExploreResult from './component';

const mapStateToProps = ({ explorer }) => ({
  guides: explorer.guides.all,
  products: explorer.products.all
});

const mapDispatchToProps = dispatch => ({
  exploreGuides: query => console.log({ query }),
  exploreProducts: query => query
});

const ExploreResultContainer = connect(mapStateToProps, mapDispatchToProps)(ExploreResult);

export default ExploreResultContainer;
