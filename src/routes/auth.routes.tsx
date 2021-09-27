import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { Confirmation } from '../screens/Confirmation'
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondtStep } from '../screens/SignUp/SignUpSecondStep';

const Stack = createStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />

      <Stack.Screen
        name="SignUpFirstStep"
        component={SignUpFirstStep}
      />

      <Stack.Screen
        name="SignUpSecondStep"
        component={SignUpSecondtStep}
      />

      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
      />
    </Stack.Navigator>
  )
}