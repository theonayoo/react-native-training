import {ADD_PRODUCT, ORDERS} from '../Type';

const initialState = {
  products: [],
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: action.products,
      };
    case ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.orders],
      };
    default:
      return {
        products: state.products,
        orders: state.orders,
      };
  }
};
