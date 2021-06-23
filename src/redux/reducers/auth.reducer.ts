import * as Types from '../types';

const auth = (
  state = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
    user: '',
    token: '',
  },
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case Types.EMAIL_TEXT: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case Types.PASSWORD_TEXT: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default:
      return state;
  }
};

export default auth;
