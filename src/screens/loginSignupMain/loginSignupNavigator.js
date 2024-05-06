import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './loginMain/login'
import SignUp from './signupMain/signUp';
const Stack = createStackNavigator();

function LoginSignupNavigator() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
    </Stack.Navigator>
  );
}

export default LoginSignupNavigator;