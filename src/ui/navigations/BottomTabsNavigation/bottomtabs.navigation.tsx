import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabsNavigationParamsMap } from 'navigations/BottomTabsNavigation/types'
import { HomeScreen } from 'screens/BottomTabsNavigation/HomeScreen'
import { TicketsScreen } from 'screens/BottomTabsNavigation/TicketsScreen'
import { FavoriteScreen } from 'screens/BottomTabsNavigation/FavoriteScreen'
import { ProfileScreen } from 'screens/BottomTabsNavigation/ProfileScreen'

const Nav = createBottomTabNavigator<BottomTabsNavigationParamsMap>()

export const BottomTabsNavigation = () => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name={'HomeScreen'} component={HomeScreen} />
      <Nav.Screen name={'TicketsScreen'} component={TicketsScreen} />
      <Nav.Screen name={'FavoriteScreen'} component={FavoriteScreen} />
      <Nav.Screen name={'ProfileScreen'} component={ProfileScreen} />
    </Nav.Navigator>
  )
}
