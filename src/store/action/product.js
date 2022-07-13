import {ADD_PRODUCT, DELTE_PRODUCT, UPDATE_PRODUCT} from '../Type';

export const addProducts = data => {
  return {
    type: ADD_PRODUCT,
    products: data,
  };
};

export const updateProduct = data => {
  return {
    type: UPDATE_PRODUCT,
    updateData: data,
  };
};

export const deleteProduct = id => {
  return {
    type: DELTE_PRODUCT,
    id: id,
  };
};
