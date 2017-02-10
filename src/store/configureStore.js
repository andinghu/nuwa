import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import reducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
  const logger = createLogger({
    predicate: () => true,
    actionTransformer: action => Immutable.Map(action).toJS(),
    stateTransformer: state => Immutable.Map(state).toJS(),
  });

  return createStore(
    reducer,
    undefined,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  );
}
