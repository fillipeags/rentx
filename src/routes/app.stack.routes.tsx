import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Schedules } from '../screens/Schedules'
import { ScheduleDetails } from '../screens/ScheduleDetails'
import { Confirmation } from '../screens/Confirmation'
import { MyCars } from '../screens/MyCars';

const Stack = createStackNavigator()

export function AppStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
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