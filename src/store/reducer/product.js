import {ADD_PRODUCT, DELTE_PRODUCT, UPDATE_PRODUCT} from '../Type';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let currentData = action.products;
      let newProducts;
      if (state.products.length > 0) {
        const newData = {
          id: state.products.length + 1,
          quantity: currentData.quantity,
          imageUrl: currentData.imageUrl,
          title: currentData.title,
          price: currentData.price,
          currency: currentData.currency,
          description: '',
        };

        newProducts = [...state.products, newData];
      } else {
        newProducts = action.products;
      }

      return {
        products: newProducts,
      };

    case UPDATE_PRODUCT:
      let updateData = action.updateData;
      let productIndex = state.products.findIndex(
        item => item.id === updateData.id,
      );

      const updateCurrentProducts = [...state.products];
      updateCurrentProducts[productIndex] = updateData;

      return {
        ...state,
        products: updateCurrentProducts,
      };

    case DELTE_PRODUCT:
      return {
        products: state.products.filter(state => state.id !== action.id),
      };

    default:
      return {
        products: state.products,
      };
  }
};
