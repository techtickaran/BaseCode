import {StyleSheet} from 'react-native';
import Size from '../heleper/Size';
import common from './common.style';
const profile = StyleSheet.create({
  container: {
    ...common.container,
  },
  safeArea: {
    ...common.safeArea,
  },
  content: {
    ...common.content,
  },
  login: {
    fontSize: Size._25,
    fontWeight: '500',
    alignSelf: 'center',
  },
  email: {
    marginTop: Size._20,
    paddingHorizontal: Size._10,
    fontSize: Size._17,
    height: Size._44,
    borderWidth: 1,
  },
  password: {
    marginTop: Size._10,
    paddingHorizontal: Size._10,
    fontSize: Size._17,
    height: Size._44,
    borderWidth: 1,
  },
  loginButton: {
    marginTop: Size._10,
    fontSize: Size._25,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'blue',
  },
});
export default profile;
