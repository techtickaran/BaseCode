import * as API from '../api/index';
import {put, call} from 'redux-saga/effects';
import {hideLoader, showLoader} from '../actions/common';
import {loginSuccess} from '../actions/auth';
import GlobalFunctions from '../../heleper/Global';
import NavigationAction from '../../navigation/NavigationAction';

export default function* loginSage(action: any) {
  let payload = action.payload;
  yield put(showLoader());
  const response = yield call(API.Login, payload.email, payload.password);
  console.log(response);
  yield put(hideLoader());
  if (response.error == undefined) {
    yield put(loginSuccess({}));
    GlobalFunctions.showResponseMessage({message: 'Login success'});
    NavigationAction.navigate('Home');
  } else {
    GlobalFunctions.showResponseMessage(response);
  }
}
