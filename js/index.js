require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.addRepository('joe'));
console.log(store.getState());