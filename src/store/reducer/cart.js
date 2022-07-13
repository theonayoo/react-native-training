import {ADD_TO_CART, REMOVE_FROM_CART, ADD_ORDER} from '../Type';

const initialState = {
  carts: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let cartData = action.cartData;
      let cartid = cartData.id;
      let updateCartItem;

      if (state.carts[cartid]) {
        const updateCart = {
          id: state.carts[cartid].id,
          quantity: state.carts[cartid].quantity + 1,
          imageUrl: state.carts[cartid].imageUrl,
          title: state.carts[cartid].title,
          price: state.carts[cartid].price + cartData.price,
          currency: state.carts[cartid].currency,
          description: '',
        };

        updateCartItem = {...state.carts, [cartid]: updateCart};
      } else {
        updateCartItem = {...state.carts, [cartid]: cartData};
      }

      return {
        ...state,
        carts: updateCartItem,
      };

    case REMOVE_FROM_CART:
      let rmData = action.removeData;
      let currentQty = rmData.quantity;
      let currentPrice = rmData.price / currentQty;
      let updateCart;

      if (currentQty > 1) {
        const cart = {
          id: rmData.id,
          quantity: currentQty - 1,
          imageUrl: rmData.imageUrl,
          title: rmData.title,
          price: state.carts[rmData.id].price - currentPrice,
          currency: rmData.currency,
          description: '',
        };

        updateCart = {...state.carts, [rmData.id]: cart};
      } else {
        updateCart = {...state.carts};
        delete updateCart[rmData.id];
      }

      return {
        ...state,
        carts: updateCart,
      };

    case ADD_ORDER:
      return {
        carts: {},
      };

    default:
      return {
        carts: state.carts,
      };
  }
};
