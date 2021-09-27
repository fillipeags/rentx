import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppStackRoutes } from './app.stack.routes'

import { Home } from '../screens/Home'
import { MyCars } from '../screens/MyCars';

const Tab = createBottomTabNavigator()

export function AppTabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={AppStackRoutes}
      />

      <Tab.Screen
        name="Profile"
        component={Home}
      />

      <Tab.Screen
        name="MyCars"
        component={MyCars}
      />
    </Tab.Navigator>
  )
}