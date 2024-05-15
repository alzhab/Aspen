import React from 'react'
import { observer } from 'mobx-react'
import { Text, View } from 'react-native'

export const FavoriteScreen = observer(() => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>FavoriteScreen</Text>
    </View>
  )
})
