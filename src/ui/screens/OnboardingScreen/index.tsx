import React, { useMemo } from 'react'
import { observer } from 'mobx-react'
import { ImageBackground } from 'react-native'
import { ScaledSheet, verticalScale } from 'react-native-size-matters/extend'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, TouchableOpacity, View } from '../../components/base'
import { useOnboardingAdapter } from 'blms/OnboardingBlm/ui-adapters'
import { FadeIn, FadeInLeft, FadeInUp } from 'react-native-reanimated'

const DELAY = 400
const DURATION = 500

export const OnboardingScreen = observer(() => {
  const insets = useSafeAreaInsets()
  const styles = useMemo(() => SS({ insets }), [insets])
  const { exploreCallback } = useOnboardingAdapter()

  return (
    <ImageBackground
      source={require('assets/images/onboarding-bg.png')}
      style={styles.container}>
      <Text
        entering={FadeInUp.delay(DELAY).duration(DURATION)}
        typ-logo
        c-white
        fz-116>
        Aspen
      </Text>

      <View p-h-32>
        <Text
          entering={FadeInLeft.delay(DELAY * 2).duration(DURATION)}
          typ-welcome_text
          c-white>
          Plan your
        </Text>
        <Text
          typ-title_text
          c-white
          m-b-24
          entering={FadeInLeft.delay(DELAY * 3).duration(DURATION)}>
          Luxurious Vacation
        </Text>
        <TouchableOpacity
          entering={FadeIn.delay(DELAY * 4).duration(DURATION)}
          br-16
          p-v-16
          bg-primary
          onPress={exploreCallback}>
          <Text typ-button_label c-white>
            Explore
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
})

const SS = ({ insets }: { insets: EdgeInsets }) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      paddingTop:
        insets.top > verticalScale(93) ? insets.top : verticalScale(93),
      paddingBottom:
        insets.bottom > verticalScale(49) ? insets.bottom : verticalScale(49),
      justifyContent: 'space-between',
    },
  })
