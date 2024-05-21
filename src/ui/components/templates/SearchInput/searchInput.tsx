import React from 'react'
import { CompProps } from 'types/component.types'
import { ISearchInputProps } from './types'
import { ScaledSheet } from 'react-native-size-matters/extend'
import { FONTS } from 'configs/Theme'
import { View } from '../../base'
import { SearchIcon } from 'icons/SearchIcon'
import { TextInput } from 'react-native'
import {
  MarginUtilProps,
  useMarginUtil,
} from '../../../../instruments/theme/hooks/useMarginUtil'

export const SearchInput: CompProps<
  ISearchInputProps & MarginUtilProps
> = props => {
  const margins = useMarginUtil(props)

  return (
    <View style={[margins, styles.input_container]} bg-bluelight br-24 p-16>
      <SearchIcon />
      <TextInput style={styles.input} placeholder={'Find things to do'} />
    </View>
  )
}

const styles = ScaledSheet.create({
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.italic,
    fontSize: 13,
  },
})
