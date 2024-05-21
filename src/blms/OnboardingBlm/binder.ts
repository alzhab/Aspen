import { Container } from 'inversify'
import { OnboardingStore, OnboardingStoreId, IOnboardingStore } from './store'

import {
  OnboardingActions,
  OnboardingActionsId,
  IOnboardingActions,
} from './actions'

export const bindOnboardingBlm = (container: Container) => {
  container.bind<IOnboardingStore>(OnboardingStoreId).to(OnboardingStore)
  container.bind<IOnboardingActions>(OnboardingActionsId).to(OnboardingActions)
}
