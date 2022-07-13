import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

// From reducer
import productReducer from './reducer/product';
import cartReducer from './reducer/cart';
import orderReducer from './reducer/order';

const rootReducer = combineReducers({
  productList: productReducer,
  cartList: cartReducer,
  orderList: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
