import React, { FC } from 'react'
import { OnboardingScreen } from 'screens/OnboardingScreen'
import { BottomTabsNavigation } from 'navigations/BottomTabsNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import { RootNavigationParamsMap } from './types'

const Nav = createStackNavigator<RootNavigationParamsMap>()

export const RootNavigation: FC<{
  initialScreen: keyof RootNavigationParamsMap
}> = ({ initialScreen }) => {
  return (
    <Nav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialScreen}>
      <Nav.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
      <Nav.Screen
        name={'BottomTabsNavigation'}
        component={BottomTabsNavigation}
      />
    </Nav.Navigator>
  )
}
