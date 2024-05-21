import React from 'react'
import EntryPoint from './src/EntryPoint'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Platform, UIManager } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { IOCProvider } from '@corrbo/base/IOC'
import { BINDERS } from './src/binders'
import { ThemeProvider } from 'react-native-magnus'
import { COLORS, THEME } from 'configs/Theme'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

const App = () => {
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <SafeAreaProvider style={{ backgroundColor: COLORS.primary }}>
        <IOCProvider binders={BINDERS}>
          <ThemeProvider theme={THEME}>
            <EntryPoint />
          </ThemeProvider>
        </IOCProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
