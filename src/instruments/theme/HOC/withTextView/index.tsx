import { PaddingUtilProps, usePaddingUtil } from '../../hooks/usePaddingUtil'
import React, { FC } from 'react'
import { MarginUtilProps, useMarginUtil } from '../../hooks/useMarginUtil'
import {
  FontColorUtilProps,
  useFontColorUtil,
} from '../../hooks/useFontColorUtil'
import {
  FontTypographyUtilProps,
  useFontTypographyUtil,
} from '../../hooks/useTypographyUtil'
import { TextProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'

export const withUtilsText = (
  Component: any,
): FC<
  TextProps &
    AnimateProps<any> &
    FontColorUtilProps &
    FontTypographyUtilProps &
    PaddingUtilProps &
    MarginUtilProps
> => {
  return props => {
    const color = useFontColorUtil(props)
    const typogpraphy = useFontTypographyUtil(props)
    const margin = useMarginUtil(props)
    const padding = usePaddingUtil(props)

    return (
      <Component
        {...props}
        style={[
          {
            color,
          },
          margin,
          padding,
          typogpraphy,
          props.style,
        ]}>
        {props.children}
      </Component>
    )
  }
}
