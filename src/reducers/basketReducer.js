import {ADD_PRODUCT_TO_BASKET} from '../actions/types';

const initialState = {
    basketProducts:[]
}

export default function (state = initialState,action) {
    const {type,payload} = action;
   
    switch (type) {

        case ADD_PRODUCT_TO_BASKET:
            console.log("basket Reducer",payload)

            return{
                ...state,
                basketProducts:[...state.basketProducts, payload],           
            }
        default:
            return state;
    }
    
}