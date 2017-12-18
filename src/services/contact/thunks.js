import { RSAA } from 'redux-api-middleware';
import { submitFormRequest, submitFormSuccess, submitFormError } from './actions';
import appConfig from '../../config';

export const submitForm = () => (dispatch, getState) => {
  const { data } = getState().contact;
  dispatch({
    [RSAA]: {
      endpoint: `${appConfig.api.path}contact/send-email/`,
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
      types: [submitFormRequest, submitFormSuccess, submitFormError]
    }
  });
};
