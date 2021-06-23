import * as Types from '../types';

export function updateEmail(email: string) {
  const action = {
    type: Types.EMAIL_TEXT,
    payload: email,
  };
  return action;
}
export function updatePassword(password: string) {
  const action = {
    type: Types.PASSWORD_TEXT,
    payload: password,
  };
  return action;
}
export function register(email: string, password: string) {
  const action = {
    type: Types.REGISTER,
    payload: {email: email, password: password},
  };
  return action;
}
export function registerSuccess(payload: any) {
  const action = {
    type: Types.REGISTER_SUCCESS,
    payload: payload,
  };
  return action;
}

export function login(email: string, password: string) {
  const action = {
    type: Types.LOGIN,
    payload: {email: email, password: password},
  };
  return action;
}
export function loginSuccess(payload: any) {
  const action = {
    type: Types.LOGIN_SUCCESS,
    payload: payload,
  };
  return action;
}
