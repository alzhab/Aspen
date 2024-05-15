import React, { FC } from 'react'
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const HomeIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.22708 13.713C3.22708 8.082 3.84108 8.475 7.14608 5.41C8.59208 4.246 10.8421 2 12.7851 2C14.7271 2 17.0221 4.235 18.4811 5.41C21.7861 8.475 22.3991 8.082 22.3991 13.713C22.3991 22 20.4401 22 12.8131 22C5.18608 22 3.22708 22 3.22708 13.713Z"
        fill="url(#paint0_linear_123_30)"
      />
      <Path
        d="M9.90677 16.1348H15.7218"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_123_30"
          x1="22.1525"
          y1="16.4231"
          x2="2.51806"
          y2="16.1695"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#176FF2" />
          <Stop offset="1" stopColor="#196EEE" />
        </LinearGradient>
      </Defs>
    </>
  ),
  25,
  24,
)
