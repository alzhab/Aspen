import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Navigation } from 'navigations/Navigation'
import { useInitialScreenAdapter } from '@corrbo/module-navigation/blm/ui-adapters/initial-screen.adapter'
import { useIsStoresHydrated } from '@corrbo/module-localstorage/hooks/useIsStoresHydrated'
import { HYDRATED_STORES } from './blms/hydrated-stores'
import { EVENT_EMITTER } from '@corrbo/base/IOC/IOCProvider'
import { EAppStateFlowEvents } from 'blms/AppStateBlm/flow'

const EntryPoint = observer(() => {
  // const { activeThemeName } = useTheme()
  const { initialScreen } = useInitialScreenAdapter()

  const isStoresHydrated = useIsStoresHydrated(HYDRATED_STORES)

  useEffect(() => {
    if (isStoresHydrated) {
      EVENT_EMITTER.emitEvent({ name: EAppStateFlowEvents.ON_APP_OPEN })
    }
  }, [isStoresHydrated])

  return (
    <>
      {/*<StatusBar {...COLORS_SB_PROPS[activeThemeName]} />*/}

      <Navigation initialScreen={initialScreen} />
    </>
  )
})

export default EntryPoint
