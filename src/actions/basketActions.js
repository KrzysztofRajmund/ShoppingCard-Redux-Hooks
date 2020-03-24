import { ADD_PRODUCT_TO_BASKET } from "./types";
import React, { Component, useState, useEffect } from "react";

//add product to basket
export const addProductToBasket = (product) => async dispatch => {
    
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: product
    });
};

