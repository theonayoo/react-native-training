import {ADD_ORDER} from '../Type';

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        orders: action.order,
      };

    default:
      return {
        orders: state.orders,
      };
  }
};
