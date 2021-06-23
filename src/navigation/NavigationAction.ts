import {
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
} from '@react-navigation/native';

let _navigator: NavigationContainerRef;
function setTopLevelNavigator(navigatorRef: NavigationContainerRef) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
  _navigator.dispatch(CommonActions.navigate(routeName, params));
}
function toggleDrawer() {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

// add other navigation functions that you need and export them
function resetTo() {
  _navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: 'Login'}],
    }),
  );
}
function resetToMap() {
  _navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: 'Map'}],
    }),
  );
}
function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

function popPage() {
  _navigator.goBack();
}

export default {
  navigate,
  resetTo,
  resetToMap,
  popPage,
  goBack,
  toggleDrawer,
  setTopLevelNavigator,
};
