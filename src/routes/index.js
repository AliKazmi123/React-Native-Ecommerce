import LoginSignupNavigator from '../screens/loginSignupMain/loginSignupNavigator'
import HomeMainNavigator from '../screens/homeMain/homeMainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function CreateRootNavigator({ navigation, signedIn, isOnboarding, isLoading = false }) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name="Splash" component={LoginSignupNavigator} />
        ) : !signedIn ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={LoginSignupNavigator}
            options={{
              headerShown: false,
              title: 'Sign in'
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="HomeMain" options={{
            headerShown: false,
            title: 'Sign in'
          }} component={HomeMainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}