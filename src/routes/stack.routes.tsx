import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

// const { Navigator, Screen } = createStackNavigator()

import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Schedules } from '../screens/Schedules'
import { ScheduleDetails } from '../screens/ScheduleDetails'
import { ScheduleCompleted } from '../screens/ScheduleCompleted'
import { MyCars } from '../screens/MyCars';

const Stack = createStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
        name="ScheduleCompleted"
        component={ScheduleCompleted}
      />

      <Stack.Screen
        name="MyCars"
        component={MyCars}
      />
    </Stack.Navigator>
  )
}