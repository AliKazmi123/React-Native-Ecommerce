import React, { useState, useEffect } from 'react';
import CreateRootNavigator from "../routes";
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { isLoginSelector } from '../modules/selectors';

const AppContainer = ({ isLogin }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [isOnboarding, setIsOnboarding] = useState(true)

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  if (isLogin) {
    return (
      <CreateRootNavigator signedIn={isLogin} isOnboarding={isOnboarding} />
    );
  }
  if (signedIn == null || isOnboarding == null) {
    return (null)
  } else {
    return (
      <CreateRootNavigator signedIn={signedIn} isOnboarding={isOnboarding} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: isLoginSelector(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
