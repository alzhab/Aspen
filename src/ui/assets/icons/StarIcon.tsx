import React, { FC } from 'react'
import { Path } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const StarIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        d="M8.82709 11.3333L4.82709 13.3333L5.82709 9.33333L2.82709 6L7.16042 5.66667L8.82709 2L10.4938 5.66667L14.8271 6L11.8271 9.33333L12.8271 13.3333L8.82709 11.3333Z"
        fill="#D8D138"
      />
      <Path
        d="M8.82709 11.3333L4.82709 13.3333L5.82709 9.33333L2.82709 6L7.16042 5.66667L8.82709 2L10.4938 5.66667L14.8271 6L11.8271 9.33333L12.8271 13.3333L8.82709 11.3333Z"
        fill="#F8D675"
      />
    </>
  ),
  17,
  16,
)
