export interface IOnboardingStore {
  isOnboardingShowed: boolean

  setIsOnboardingShowed(val: IOnboardingStore['isOnboardingShowed']): void

  isHydrated(): boolean
}
