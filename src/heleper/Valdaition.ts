import Strings from './Strings';

export default {
  loginValidate: (email: string, password: string) => {
    var emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;

    if (email == '') {
      return {error_id: 1, error: Strings.EnterEmail};
    } else if (!emailRegex.test(email)) {
      return {error_id: 2, error: Strings.EnterValidEmail};
    } else if (password == '') {
      return {error_id: 3, error: Strings.EnterPassword};
    }
    // else if (!passwordRegex.test(password)) {
    //   return {
    //     error_id: 4,
    //     error:
    //       Strings.EnterValidPassword
    //   };
    // }
    else {
      return {error_id: 0, error: ''};
    }
  },
};
