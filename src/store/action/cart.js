import {ADD_TO_CART, REMOVE_FROM_CART} from '../Type';

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    cartData: data,
  };
};

export const removeFromCart = data => {
  return {
    type: REMOVE_FROM_CART,
    removeData: data,
  };
};
