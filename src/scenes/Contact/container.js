import { connect } from 'react-redux';
import Contact from './component';
import { updateInputValue } from '../../services/contact/actions';
import { submitForm } from '../../services/contact/thunks';
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from '../../services/contact/constants';

const mapStateToProps = ({ contact }) => {
  const { name, surname, email, reason, message } = contact.data;
  const { isError, isLoading, isSuccess } = contact;
  const alertMessage = (isError && MESSAGE_ERROR) || (isSuccess && MESSAGE_SUCCESS);
  return {
    alertMessage,
    email,
    message,
    name,
    reason,
    surname,
    isError,
    isLoading,
    isSuccess
  };
};

const mapDispatchToProps = dispatch => ({
  onInputValueChange: data => dispatch(updateInputValue(data)),
  onSubmitForm: () => dispatch(submitForm())
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
