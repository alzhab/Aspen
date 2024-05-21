import { inject, injectable } from 'inversify'
import { EAppStateFlowEvents, IAppState } from '../flow'
import { RootNavigationParamsMap } from 'navigations/RootNavigation'
import {
  IInitialRouteActions,
  InitialRouteActionsId,
} from '@corrbo/module-navigation/blm/actions'
import { EVENT_EMITTER } from '@corrbo/base/IOC/IOCProvider'
import { IFlowReactions } from 'blms/types'
import LottieSplashScreen from 'react-native-lottie-splash-screen'
import {
  IOnboardingActions,
  OnboardingActionsId,
} from 'blms/OnboardingBlm/actions'

export const AppStateFlowId = Symbol.for('AppStateFlow')
EVENT_EMITTER.addFlowId(AppStateFlowId)

@injectable()
export class AppStateFlow implements IAppState {
  constructor(
    @inject(InitialRouteActionsId)
    private initialRouteActions: IInitialRouteActions,
    @inject(OnboardingActionsId)
    private onboardingActions: IOnboardingActions,
  ) {}

  get reactions(): IFlowReactions {
    return {
      [EAppStateFlowEvents.ON_APP_OPEN]: this.onAppOpen.bind(this),
    }
  }

  onAppOpen(): void {
    setTimeout(() => {
      LottieSplashScreen.hide()
      this.initialRouteActions.setInitialRouteName(this.screen)
    }, 1000)
  }

  get screen(): keyof RootNavigationParamsMap {
    return this.onboardingActions.isNeedToShowOnboarding()
      ? 'OnboardingScreen'
      : 'BottomTabsNavigation'
  }
}
