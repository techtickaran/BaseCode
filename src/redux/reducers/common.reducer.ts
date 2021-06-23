import * as Types from '../types';

const common = (
  state = {showLoader: false},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case Types.SHOW_LOADER: {
      return {
        ...state,
        showLoader: true,
      };
    }
    case Types.HIDE_LOADER: {
      return {
        ...state,
        showLoader: false,
      };
    }
    default:
      return state;
  }
};

export default common;
