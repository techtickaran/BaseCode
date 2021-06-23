import * as API from '../api/index';
import {put, call} from 'redux-saga/effects';
import {hideLoader, showLoader} from '../actions/common';
import {loginSuccess, registerSuccess} from '../actions/auth';
import GlobalFunctions from '../../heleper/Global';
import NavigationAction from '../../navigation/NavigationAction';

export default function* registerSage(action: any) {
  let payload = action.payload;
  yield put(showLoader());
  const response = yield call(API.Register, payload.email, payload.password);
  console.log(response);
  yield put(hideLoader());
  if (response.error == undefined) {
    yield put(registerSuccess(response.token));
    GlobalFunctions.showResponseMessage({message: 'Register success'});
    NavigationAction.navigate('Login');
  } else {
    GlobalFunctions.showResponseMessage(response);
  }
}
