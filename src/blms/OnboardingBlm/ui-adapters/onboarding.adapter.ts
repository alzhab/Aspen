import { useCallback } from 'react'
import { useInjection } from 'inversify-react'
import {
  IOnboardingActions,
  OnboardingActionsId,
} from 'blms/OnboardingBlm/actions'

export function useOnboardingAdapter() {
  const actions = useInjection<IOnboardingActions>(OnboardingActionsId)

  const exploreCallback = useCallback(() => {
    actions.onboardingExit()
  }, [])

  return {
    exploreCallback,
  }
}
