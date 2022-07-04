import { actions } from "./action";

const initstate = {
  loading: false,
  city: [],
  country: [],
  error: false,
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case actions.ADD_CITY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.ADD_CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        city: [...state, payload],
        error: false,
      };
    }
    case actions.ADD_CITY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case actions.ADD_COUNTRY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.ADD_COUNTRY_SUCCESS: {
      return {
        ...state,
        loading: false,
        country: [...state, payload],
        error: false,
      };
    }
    case actions.ADD_COUNTRY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case actions.GET_CITY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        city: payload,
        error: false,
      };
    }
    case actions.GET_CITY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case actions.GET_COUNTRY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_COUNTRY_SUCCESS: {
      return {
        ...state,
        loading: false,
        country: payload,
        error: false,
      };
    }
    case actions.GET_COUNTRY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
