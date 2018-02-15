import {
  GET_PROVINCES,
  GET_LOCATIONS,
  GET_PROVINCES_REQUEST,
  GET_LOCATIONS_REQUEST,
  GET_PROVINCES_MOTO,
  GET_LOCATIONS_MOTO_SUCCESS,
  GET_CORREO_BRANCH_OFFICES_SUCCESS
} from './actionTypes';
import { convertStringToNumber } from '../utils';

const initialState = {
  correoBranchOffices: [],
  provinces: [],
  locations: [],
  isLoadingProvinces: false,
  isLoadingLocations: false
};

const mapProvincesFromApi = ({ id, name }) => ({
  id: convertStringToNumber(id),
  name
});

const mapProvincesMotoFromApi = ({ id, province }) => ({
  id: convertStringToNumber(id),
  name: province
});

const mapLocationsMotoFromApi = ({ idLocation, location }) => ({
  id: convertStringToNumber(idLocation),
  name: location
});

const mapLocationsFromApi = location => ({
  ...location,
  id: convertStringToNumber(location.id)
});

const mapCorreoBranchOfficesFromApi = ({ nis_code, denomination }) => ({
  id: nis_code,
  name: denomination
});

function placesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PROVINCES:
      return {
        ...state,
        isLoadingProvinces: false,
        provinces: action.payload.map(mapProvincesFromApi)
      };
    case GET_PROVINCES_MOTO:
      return {
        ...state,
        isLoadingProvinces: false,
        provinces: action.payload.map(mapProvincesMotoFromApi)
      };
    case GET_LOCATIONS:
      return {
        ...state,
        isLoadingLocations: false,
        locations: action.payload.map(mapLocationsFromApi)
      };
    case GET_LOCATIONS_MOTO_SUCCESS:
      return {
        ...state,
        isLoadingLocations: false,
        locations: action.payload.map(mapLocationsMotoFromApi)
      };
    case GET_LOCATIONS_REQUEST:
      return {
        ...state,
        isLoadingLocations: true
      };
    case GET_PROVINCES_REQUEST:
      return {
        ...state,
        isLoadingProvinces: true
      };
    case GET_CORREO_BRANCH_OFFICES_SUCCESS:
      return {
        ...state,
        correoBranchOffices: action.payload.map(mapCorreoBranchOfficesFromApi)
      };
    default: {
      return state;
    }
  }
}

export default placesReducer;
