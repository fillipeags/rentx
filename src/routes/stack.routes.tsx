import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

// const { Navigator, Screen } = createStackNavigator()

import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Schedules } from '../screens/Schedules'
import { ScheduleDetails } from '../screens/ScheduleDetails'
import { Confirmation } from '../screens/Confirmation'
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondtStep } from '../screens/SignUp/SignUpSecondStep';

const Stack = createStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
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
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />

      <Stack.Screen
        name="CarDetails"
        component={CarDetails}
      />

      <Stack.Screen
        name="Schedules"
        component={Schedules}
      />

      <Stack.Screen
        name="ScheduleDetails"
        component={ScheduleDetails}
      />

      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
      />

      <Stack.Screen
        name="MyCars"
        component={MyCars}
      />
    </Stack.Navigator>
  )
}