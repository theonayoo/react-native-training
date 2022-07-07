import {ADD_PRODUCT, ORDERS} from '../Type';

export const addProducts = data => {
  return {
    type: ADD_PRODUCT,
    products: data,
  };
};

export const orderProducts = data => {
  return {
    type: ORDERS,
    orders: data,
  };
};
