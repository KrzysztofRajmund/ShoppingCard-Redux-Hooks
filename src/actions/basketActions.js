import { ADD_PRODUCT_TO_BASKET } from "./types";

const basket = [];

//add product to basket
export const addProductToBasket = (product) => async dispatch => {
 console.log(product)
  if (product) {
    basket.push(product);

    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: basket
    });
  }
};

