// store.js
import { createStore } from 'redux';
import userReducer from './user_reducer';

const userStore = createStore(userReducer);

export default userStore;
