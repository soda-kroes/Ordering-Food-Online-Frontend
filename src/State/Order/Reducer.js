import {
  GET_USER_ORDER_FAILURE,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
} from "./ActionTypes";

const initialState = {
  loading: false,
  orders: [],
  error: null,
  notifications: [],
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_ORDER_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_USER_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        orders: payload,
      };
    case GET_USER_ORDER_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};