import { connect } from 'react-redux';
import Payment from './component';

const mapStateToProps = ({ paymentTypes }) => ({
  paymentTypes
});

const PaymentContainer = connect(mapStateToProps, null)(Payment);

export default PaymentContainer;
