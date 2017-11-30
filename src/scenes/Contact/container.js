import { connect } from 'react-redux';
import Contact from './component';
import { updateInputValue } from '../../services/contact/actions';
import { submitForm } from '../../services/contact/thunks';

const mapStateToProps = ({ contact: { data } }) => ({
  name: data.name,
  surname: data.surname,
  email: data.email,
  reason: data.reason,
  message: data.message
});

const mapDispatchToProps = dispatch => ({
  onInputValueChange: data => dispatch(updateInputValue(data)),
  onSubmitForm: () => dispatch(submitForm())
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
