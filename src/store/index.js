import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

// From reducer
import productReducer from './reducer/product';

const rootReducer = combineReducers({
  productList: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
