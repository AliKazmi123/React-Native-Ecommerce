import { all } from 'redux-saga/effects';

import modulesSaga from './modules/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([
    modulesSaga(), 
  ]);
}
