import { ADD_PRODUCT_TO_BASKET } from "./types";

//add product to basket
export const addProductToBasket = (product) => async dispatch => {
   
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: product
    });
};

