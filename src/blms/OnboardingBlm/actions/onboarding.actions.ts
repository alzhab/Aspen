import { inject, injectable } from 'inversify'
import { IOnboardingActions } from './types'
import { IOnboardingStore, OnboardingStoreId } from 'blms/OnboardingBlm/store'
import {
  INavigationService,
  NavigationServiceId,
} from '@corrbo/module-navigation/services'

export const OnboardingActionsId = Symbol.for('OnboardingActions')

@injectable()
export class OnboardingActions implements IOnboardingActions {
  constructor(
    @inject(OnboardingStoreId) private onboardingStore: IOnboardingStore,
    @inject(NavigationServiceId) private navigationService: INavigationService,
  ) {}

  onboardingExit(): void {
    this.onboardingStore.setIsOnboardingShowed(true)
    this.navigationService.reset('BottomTabsNavigation')
  }

  isNeedToShowOnboarding(): boolean {
    return !this.onboardingStore.isOnboardingShowed
  }
}
