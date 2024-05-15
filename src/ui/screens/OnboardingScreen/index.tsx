import React from 'react'
import { observer } from 'mobx-react'
import { View } from 'react-native'

export const OnboardingScreen = observer(() => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  )
})
