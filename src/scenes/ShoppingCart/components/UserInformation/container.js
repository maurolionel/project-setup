import { connect } from 'react-redux';
import UserInformation from './component';
import { setInputValue } from '../../../../services/purchase/actions';

const mapStateToProps = ({ purchase }) => ({
  data: purchase.data
});

const mapDispatchToProps = dispatch => ({
  onInputChange: (type, value) => dispatch(setInputValue({ type, value }))
});

const UserInformationContainer = connect(mapStateToProps, mapDispatchToProps)(UserInformation);

export default UserInformationContainer;
