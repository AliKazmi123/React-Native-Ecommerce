import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Create from './post/create';
import Home from './home';
import Comment from './comment';

const Stack = createStackNavigator();

function HomeMainNavigator() {
  
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" options={{ headerShown: false }} component={Home}/>
     <Stack.Screen name="Comment" options={{ headerShown: false }} component={Comment}/>
      <Stack.Screen name="Create" options={{ headerShown: false }} component={Create}/>
    </Stack.Navigator>
  );
}

export default HomeMainNavigator;