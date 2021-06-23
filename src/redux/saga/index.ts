import {takeEvery, all} from 'redux-saga/effects';
import * as Action from '../types';
import RegisterSaga from './register.saga';
import LoginSaga from './login.saga';
export default function* watch() {
  yield all([takeEvery(Action.REGISTER, RegisterSaga)]);
  yield all([takeEvery(Action.LOGIN, LoginSaga)]);
}
