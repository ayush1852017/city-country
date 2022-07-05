import axios from "axios";
export const actions = {
  ADD_CITY_REQUEST: "ADD_CITY_REQUEST",
  ADD_CITY_SUCCESS: "ADD_CITY_SUCCESS",
  ADD_CITY_FAILURE: "ADD_CITY_FAILURE",
  ADD_COUNTRY_REQUEST: "ADD_COUNTRY_REQUEST",
  ADD_COUNTRY_SUCCESS: "ADD_COUNTRY_SUCCESS",
  ADD_COUNTRY_FAILURE: "ADD_COUNTRY_FAILURE",
  GET_CITY_REQUEST: "GET_CITY_REQUEST",
  GET_CITY_SUCCESS: "GET_CITY_SUCCESS",
  GET_CITY_FAILURE: "GET_CITY_FAILURE",
  DELETE_CITY_REQUEST: "DELETE_CITY_REQUEST",
  DELETE_CITY_SUCCESS: "DELETE_CITY_SUCCESS",
  DELETE_CITY_FAILURE: "DELETE_CITY_FAILURE",
  GET_COUNTRY_REQUEST: "GET_COUNTRY_REQUEST",
  GET_COUNTRY_SUCCESS: "GET_COUNTRY_SUCCESS",
  GET_COUNTRY_FAILURE: "GET_COUNTRY_FAILURE",
};

export const addCityRequest = () => ({
  type: actions.ADD_CITY_REQUEST,
});
export const addCitySuccess = (payload) => ({
  type: actions.ADD_CITY_SUCCESS,
  payload,
});
export const addCityFailure = () => ({
  type: actions.ADD_CITY_FAILURE,
});
export const addCountryRequest = () => ({
  type: actions.ADD_COUNTRY_REQUEST,
});
export const addCountrySuccess = (payload) => ({
  type: actions.ADD_COUNTRY_SUCCESS,
  payload,
});
export const addCountryFailure = () => ({
  type: actions.ADD_COUNTRY_FAILURE,
});
export const getCityRequest = () => ({
  type: actions.GET_CITY_REQUEST,
});
export const getCitySuccess = (payload) => ({
  type: actions.GET_CITY_SUCCESS,
  payload,
});
export const getCityFailure = () => ({
  type: actions.GET_CITY_FAILURE,
});
export const deleteCityRequest = () => ({
  type: actions.DELETE_CITY_REQUEST,
});
export const deleteCitySuccess = (payload) => ({
  type: actions.DELETE_CITY_SUCCESS,
  payload,
});
export const deleteCityFailure = () => ({
  type: actions.DELETE_CITY_FAILURE,
});
export const getCountryRequest = () => ({
  type: actions.GET_COUNTRY_REQUEST,
});
export const getCountrySuccess = (payload) => ({
  type: actions.GET_COUNTRY_SUCCESS,
  payload,
});
export const getCountryFailure = () => ({
  type: actions.GET_COUNTRY_FAILURE,
});

export const addCity = (payload) => (dispatch) => {
  dispatch(addCityRequest());
  axios({
    url: "http://localhost:8080/city",
    method: "POST",
    data: payload,
  })
    .then((res) => dispatch(addCitySuccess(res)))
    .catch((err) => dispatch(addCityFailure(err)));
};
export const addCountry = (payload) => (dispatch) => {
  dispatch(addCountryRequest());
  axios({
    url: "http://localhost:8080/country",
    method: "POST",
    data: payload,
  })
    .then((res) => dispatch(addCountrySuccess(res)))
    .catch((err) => dispatch(addCountryFailure(err)));
};
export const getCity =
  ({ sort, page }) =>
  (dispatch) => {
    dispatch(getCityRequest());
    axios({
      url: "http://localhost:8080/city",
      method: "GET",
      _sort: sort,
      _page: page,
    })
      .then((res) => dispatch(getCitySuccess(res.data)))
      .catch((err) => dispatch(getCityFailure(err)));
  };
export const getCountry = () => (dispatch) => {
  dispatch(getCountryRequest());
  axios({
    url: "http://localhost:8080/country",
    method: "GET",
  })
    .then((res) => dispatch(getCountrySuccess(res.data)))
    .catch((err) => dispatch(getCountryFailure(err)));
};
export const deleteCity = (id) => (dispatch) => {
  dispatch(deleteCityRequest());
  axios({
    url: `http://localhost:8080/city/${id}`,
    method: "DELETE",
    params: id,
  })
    .then((res) =>
      dispatch(deleteCitySuccess(res.data)).then((res) =>
        dispatch(getCitySuccess(res.data))
      )
    )
    .catch((err) => dispatch(deleteCityFailure(err)));
};
