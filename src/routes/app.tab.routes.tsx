import React from 'react';
import { useTheme } from 'styled-components'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppStackRoutes } from './app.stack.routes'

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

import { Home } from '../screens/Home'
import { MyCars } from '../screens/MyCars';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator()

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.main,
      tabBarInactiveTintColor: theme.colors.text_detail,
      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
        height: 78,
        backgroundColor: theme.colors.background_primary
      }
    }}

    >
      <Tab.Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ))
        }}
      />

      <Tab.Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: (({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ))
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ))
        }}
      />
    </Tab.Navigator>
  )
}