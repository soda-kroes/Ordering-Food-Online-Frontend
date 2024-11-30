import { api } from "../../Config/api";
import {
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  GET_INGREDIENTS,
  UPDATE_STORE,
} from "./ActionTypes";

export const getIngredientOfRestaurant = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const { response } = await api.get(
        `/api/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("get all ingredient---------- ", response.data);
      dispatch({ type: GET_INGREDIENTS, payload: response.data });
    } catch (error) {
      console.log("catch error ", error);
    }
  };
};

export const createIngredient = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const { response } = await api.post("api/admin/ingredients", data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create ingredient---------- ", response.data);
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("catch error ", error);
    }
  };
};

export const createIngredientCategory = ({ data, jwt }) => {
  console.log("data ", data, "jwt ", jwt);
  return async (dispatch) => {
    try {
      const { response } = await api.get(
        "/api/admin/ingredients/category",
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("create ingredient---------- ", response.data);
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("catch error ", error);
    }
  };
};

export const getIngredientCategory = ({ id, jwt }) => {
  console.log("data ", data, "jwt ", jwt);
  return async (dispatch) => {
    try {
      const { response } = await api.get(
        `/api/admin/ingredients/restaurant/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("get ingredient category---------- ", response.data);
      dispatch({
        type: GET_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("catch error ", error);
    }
  };
};


export const updateStockOfIngredient = ({ id, jwt }) => {
    console.log("data ", data, "jwt ", jwt);
    return async (dispatch) => {
      try {
        const { data } = await api.put(
          `/api/admin/ingredients/${id}/stock`,{},
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log("updae stock ingredient---------- ", data);
        dispatch({
          type: UPDATE_STORE,
          payload: data,
        });
      } catch (error) {
        console.log("catch error ", error);
      }
    };
  };
  