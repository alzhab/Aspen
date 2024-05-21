import {
  BorderRadiusUtilProps,
  useBorderRadiusUtil,
} from '../../hooks/useBorderRadiusUtil'
import {
  BackgroundColorUtilProps,
  useBackgroundColorUtil,
} from '../../hooks/useBackgroundColorUtil'
import { PaddingUtilProps, usePaddingUtil } from '../../hooks/usePaddingUtil'
import React, { FC } from 'react'
import { MarginUtilProps, useMarginUtil } from '../../hooks/useMarginUtil'
import { PressableProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'

export const withUtilsPressable = (
  Component: any,
): FC<
  PressableProps &
    AnimateProps<any> &
    BorderRadiusUtilProps &
    BackgroundColorUtilProps &
    PaddingUtilProps &
    MarginUtilProps
> => {
  return props => {
    const borderRadiusStyles = useBorderRadiusUtil(props)
    const backgroundColor = useBackgroundColorUtil(props)
    const padding = usePaddingUtil(props)
    const margin = useMarginUtil(props)

    return (
      <Component
        {...props}
        style={[
          borderRadiusStyles,
          padding,
          margin,
          { backgroundColor },
          props.style,
        ]}>
        {props.children}
      </Component>
    )
  }
}
