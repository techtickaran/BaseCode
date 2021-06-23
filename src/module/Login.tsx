import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '../css/auth.style';
import Strings from '../heleper/Strings';
import {useSelector, useDispatch} from 'react-redux';
import {updateEmail, updatePassword, login} from '../redux/actions/auth';
import Valdaition from '../heleper/Valdaition';
import GlobalFunctions from '../heleper/Global';
import NavigationAction from '../navigation/NavigationAction';
export default function Login() {
  const dispatch = useDispatch();
  const reducer = useSelector(state => state);
  const email = reducer.auth.email;
  const password = reducer.auth.password;
  var passwordInput: React.ComponentType<Text> | null;
  const validate = () => {
    var valid = Valdaition.loginValidate(email, password);
    if (valid.error_id != 0) {
      GlobalFunctions.show(valid.error);
    } else {
      dispatch(login(email, password));
    }
  };
  return (
    <View style={auth.container}>
      <SafeAreaView style={auth.safeArea}>
        <View style={auth.content}>
          <TouchableOpacity onPress={() => NavigationAction.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          <Text style={auth.login}>Login</Text>
          <TextInput
            style={auth.email}
            placeholder={Strings.Email}
            onChangeText={(text: string) => dispatch(updateEmail(text))}
            value={email}
            onSubmitEditing={() =>
              passwordInput != null ? passwordInput.focus() : null
            }
          />
          <TextInput
            ref={ref => (passwordInput = ref)}
            style={auth.password}
            placeholder={Strings.Password}
            onChangeText={(text: string) => dispatch(updatePassword(text))}
            value={password}
          />
          <TouchableOpacity onPress={validate}>
            <Text style={auth.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
