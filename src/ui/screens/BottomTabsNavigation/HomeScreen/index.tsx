import React, { useMemo, useState } from 'react'
import { observer } from 'mobx-react'
import { Text } from '../../../components/base'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScaledSheet, verticalScale } from 'react-native-size-matters/extend'
import { Header } from 'templates/Header'
import { SearchInput } from 'templates/SearchInput'
import { FlatList, Pressable as PressableLib, ScrollView } from 'react-native'
import { COLORS } from 'configs/Theme'
import { withUtilsPressable } from '../../../../instruments/theme/HOC/withUtilsPressable'

const Pressable = withUtilsPressable(PressableLib)

export const HomeScreen = observer(() => {
  const insets = useSafeAreaInsets()
  const styles = useMemo(() => SS({ insets }), [insets])
  const [active, setActive] = useState(0)

  return (
    <ScrollView
      contentContainerStyle={styles.content_container}
      style={styles.container}>
      <Header m-b-25 />

      <SearchInput m-b-32 />

      <FlatList
        style={{ marginHorizontal: -20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        data={Array(10).fill('')}
        renderItem={({ index }) => {
          const isActive = active === index

          return (
            <Pressable
              p-v-12
              p-h-16
              bg-bluelight={isActive}
              br-33
              onPress={() => {
                console.log({ index })
                setActive(index)
              }}>
              <Text typ-tab_active c-greylight={!isActive} c-primary={isActive}>
                Location
              </Text>
            </Pressable>
          )
        }}
      />
    </ScrollView>
  )
})

const SS = ({ insets }: { insets: EdgeInsets }) =>
  ScaledSheet.create({
    container: {
      backgroundColor: COLORS.white,
    },
    content_container: {
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      paddingTop:
        insets.top > verticalScale(44) ? insets.top : verticalScale(44),
      // paddingBottom:
      //   insets.bottom > verticalScale(49) ? insets.bottom : verticalScale(49),
    },
  })
