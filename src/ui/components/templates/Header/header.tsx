import React from 'react'
import { CompProps } from 'types/component.types'
import { IHeaderProps } from './types'
import { Text, TouchableOpacity, View } from '../../base'
import { PinIcon } from 'icons/PinIcon'
import { ArrowdownIcon } from 'icons/ArrowdownIcon'
import { ScaledSheet } from 'react-native-size-matters/extend'
import {
  MarginUtilProps,
  useMarginUtil,
} from '../../../../instruments/theme/hooks/useMarginUtil'

export const Header: CompProps<IHeaderProps & MarginUtilProps> = props => {
  const margins = useMarginUtil(props)

  return (
    <View style={[margins, styles.header]}>
      <View>
        <Text typ-header_title>Explore</Text>
        <Text typ-header_heading>Aspen</Text>
      </View>

      <TouchableOpacity style={styles.location_container}>
        <PinIcon />
        <Text typ-location_text c-grey>
          Aspen, USA
        </Text>
        <ArrowdownIcon />
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
})
