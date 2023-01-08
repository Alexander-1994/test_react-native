import { legacy_createStore as createStore, combineReducers } from 'redux';
import taskReducer from './taskReducer';
import fieldReducer from './fieldReducer';

const store = createStore(combineReducers({taskReducer, fieldReducer}));

export default store;