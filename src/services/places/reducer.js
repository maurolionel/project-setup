import { GET_PROVINCES, GET_LOCATIONS } from './actionTypes';
import { convertStringToNumber, replaceMiddleDashWithSpace } from '../utils';

const initialState = {
  provinces: [],
  locations: []
};

const mapProvincesFromApiToState = ({ id, name }) => ({
  id: convertStringToNumber(id),
  name
});

const mapLocationsFromApiToState = ({ id, province_id, name }) => ({
  id: convertStringToNumber(id),
  provinceId: convertStringToNumber(province_id),
  name: replaceMiddleDashWithSpace(name)
});

function placesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PROVINCES:
      return {
        ...state,
        provinces: action.payload.result.map(mapProvincesFromApiToState)
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.result.map(mapLocationsFromApiToState)
      };
    default: {
      return state;
    }
  }
}

export default placesReducer;
