import { CALL_API } from 'redux-api-middleware';
import { setBrand, getInstructivesSuccess } from './actions';
import appConfig from '../../config';

export const setBrandWithName = brandName => (dispatch, getState) => {
  const { brands } = getState();
  const brand = brands.all.find(b => brandName === b.name);
  dispatch(setBrand({ brandId: brand.id }));
};

export const getInstructives = brandId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}instructives/brands/${brandId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', getInstructivesSuccess, 'FAILURE']
  }
});
