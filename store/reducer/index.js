import { combineReducers, applyMiddleware, compose } from 'redux';
// import { thunk } from 'redux-thunk';

import settings from './settings';

// const enhancers = [applyMiddleware(thunk)];

// if (process.env.NODE_ENV !== 'production' || isDevModeEnabled()) {
//   enhancers.unshift(profileStore());
// };

const reducer = combineReducers({
  settings,
});

export default reducer;

