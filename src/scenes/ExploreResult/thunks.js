import { push } from 'react-router-redux';
import { searchQuerySuccess } from './actions';
import { replaceSpaceWithMiddleDash } from '../utils';

export const searchQuery = query => (dispatch, getState) => {
  const trimmedQuery = replaceSpaceWithMiddleDash(query.trim());
  dispatch(searchQuerySuccess({ query: trimmedQuery }));
  dispatch(push(`/buscar/${trimmedQuery}`));
};
