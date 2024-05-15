import { NavigationProp, RouteProp } from '@react-navigation/core/src/types'

export type BottomTabsNavigationParamsMap = {
  HomeScreen: undefined
  TicketsScreen: undefined
  FavoriteScreen: undefined
  ProfileScreen: undefined
}

export type TBottomTabsNavigation = NavigationProp<BottomTabsNavigationParamsMap>

export type ProfilesTabStackRoute<D extends keyof BottomTabsNavigationParamsMap> = RouteProp<{
  params: BottomTabsNavigationParamsMap[D]
}>
