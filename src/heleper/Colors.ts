import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();

export const Colors = {
  white: '#ffffff',
  black: '#273245',
  gray: '#8F8F8F',
  whiteLight: '#F4F6F8',
  blue: '#1B5C8C',
  hint_color: '#1A1A1A',
  border: '#E2E2E2',
  green: '#41A778',
  yellow: '#F0B40B',
  red: '#EC1C24',
  lightBlue: '#61A4C7',
  lightRed: '#DD6868',
  circleDefault: '#DCDCDC',
  closeBtnBG: '#AEAEAE',

  systemColor: colorScheme == 'dark' ? 'black' : 'white',
};
