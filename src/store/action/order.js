import {ADD_ORDER} from '../Type';

export const addOrder = data => {
  return {
    type: ADD_ORDER,
    order: data,
  };
};
