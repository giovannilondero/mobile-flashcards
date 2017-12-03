import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchDecks } from '../actions';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

store.dispatch(fetchDecks());

export default store;
