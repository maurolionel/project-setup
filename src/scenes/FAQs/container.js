import { connect } from 'react-redux';
import FAQs from './component';

const mapStateToProps = ({ faqs }) => ({
  faqs: faqs.all
});

const FAQsContainer = connect(mapStateToProps, null)(FAQs);

export default FAQsContainer;
