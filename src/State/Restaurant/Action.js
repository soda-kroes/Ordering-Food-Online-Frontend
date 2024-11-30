import { api } from "../../component/Config/api";
import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  DELETE_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_RESTAURANT_FAILURE,
  GET_ALL_RESTAURANT_REQUEST,
  GET_ALL_RESTAURANT_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_SUCCESS,
} from "./ActionTypes";

export const getAllRestaurantsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
    try {
      const { data } = await api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data });
      console.log("all restaurant ", data);
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error });
    }
  };
};


export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });

    const url = `/api/restaurants/${reqData.restaurantId}`;
    console.log("Request URL:", url); 
    
    try {
      const  response  = await api.get(
        url,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );

      console.log("API Response:", response); 

      if (response && response.data) {
        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
      } else {
        throw new Error(`Response or response data is missing`);
      }
    } catch (error) {
      console.log("getRestaurantById error: " + error);
      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const getRestaurantsCategory = ({jwt, restaurantId}) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
    const url = `/api/category/restaurant/${restaurantId}`; 
    try {
      const  response  = await api.get(
        url,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log("get restaurant category:", response.data);

      if (response && response.data) {
        dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: response.data });
      } else {
        throw new Error(`Response or response data is missing`);
      }

    } catch (error) {
      console.log("catch error: " + error);
      dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
    }
  };
};


export const getRestaurantByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/restaurants/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
    }
  };
};

export const createRestaurant = (reqData) => {
  console.log("token---------------", reqData.token);

  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log("create restaurant ", data);
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurant = (restaurantId, restaturantData, jwt) => {
  console.log("token---------------", jwt);

  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });

    try {
      const { data } = await api.put(
        `/api/admin/restaurants/${restaurantId}`,
        restaturantData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data });
      console.log("create restaurant ", data);
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const deleteRestaurant = (restaurantId, jwt) => {
  console.log("token---------------", jwt);

  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });

    try {
      const response = await api.delete(
        `/api/admin/restaurants/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
      console.log("delete restaurant ", response);
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurantStatus = (restaurantId, jwt) => {
  console.log("token---------------", jwt);

  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });

    try {
      const response = await api.put(
        `/api/admin/restaurants/${restaurantId}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_SUCCESS,
        payload: restaurantId,
      });
      console.log("delete restaurant ", response);
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
    }
  };
};


export const createEventAction = ({ data, jwt, restaurantId }) => {
  console.log("token---------------", jwt);

  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });

    try {
      const res = await api.post(
        `/api/admin/event/restaurants/${restaurantId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("create events ", res.data);

      dispatch({
        type: CREATE_EVENTS_SUCCESS,
        payload: restaurantId,
      });
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const getAllEvents = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });

    try {
      const res = await api.get(`/api/events`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("get all events ", res.data);

      dispatch({
        type: GET_ALL_EVENTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    }
  };
};

export const deleteEventAction = ({ eventId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });

    try {
      const res = await api.delete(`/api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete events ", res.data);

      dispatch({
        type: DELETE_EVENTS_SUCCESS,
        payload: eventId,
      });
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurantEvents = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });

    try {
      const res = await api.delete(
        `/api/admin/events/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("get restaurant ", res.data);

      dispatch({
        type: GET_RESTAURANTS_EVENTS_SUCCESS,
        payload: restaurantId,
      });
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    try {
      const res = await api.delete(`/api/admin/category`, restaurantId, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create category ", res.data);

      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
        payload: restaurantId,
      });
    } catch (error) {
      console.log("error: " + error);
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};