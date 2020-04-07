import { ADD_PRODUCT_TO_BASKET } from "./types";

//add product to basket
export const addProductToBasket = (product,basketReducer) => async dispatch => {

  let productAlreadyInBasket = false
  
basketReducer.forEach(item=>{
  if (item.id === product.id){
    productAlreadyInBasket = true;
    item.count++
  };
})

  if(!productAlreadyInBasket){
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: ({...product,count:1})
      
    });
  }
};


