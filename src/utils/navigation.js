import { NavigationActions } from 'react-navigation';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(routeName, params);
      }
}
function goBack() {
    _navigator?.dispatch(NavigationActions.back());
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
};
