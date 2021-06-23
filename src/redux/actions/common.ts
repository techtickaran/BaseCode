import * as Types from '../types';

export function showLoader() {
  const action = {
    type: Types.SHOW_LOADER,
  };
  return action;
}
export function hideLoader() {
  const action = {
    type: Types.HIDE_LOADER,
  };
  return action;
}
export function showLoaderManually(dispatch: any) {
  const action = {
    type: Types.SHOW_LOADER,
  };
  dispatch(action);
}
export function hideLoaderManually(dispatch: any) {
  const action = {
    type: Types.HIDE_LOADER,
  };
  dispatch(action);
}
