import { injectable } from 'inversify'
import { IOnboardingStore } from './types'
import { makeAutoObservable } from 'mobx'
import { isHydrated, makePersistable } from 'mobx-persist-store'

export const OnboardingStoreId = Symbol.for('OnboardingStore')

@injectable()
export class OnboardingStore implements IOnboardingStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'OnboardingStore',
      properties: ['isOnboardingShowed'],
    })
  }

  isOnboardingShowed: boolean = false

  setIsOnboardingShowed(val: IOnboardingStore['isOnboardingShowed']): void {
    this.isOnboardingShowed = val
  }

  isHydrated(): boolean {
    return isHydrated(this)
  }
}
