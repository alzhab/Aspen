import React, { FC } from 'react'
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const ArrowdownIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        d="M2.97977 5.3131C3.15729 5.13559 3.43506 5.11945 3.6308 5.26469L3.68688 5.3131L8 9.62599L12.3131 5.3131C12.4906 5.13559 12.7684 5.11945 12.9641 5.26469L13.0202 5.3131C13.1977 5.49061 13.2139 5.76839 13.0686 5.96413L13.0202 6.02021L8.35355 10.6869C8.17604 10.8644 7.89826 10.8805 7.70252 10.7353L7.64644 10.6869L2.97977 6.02021C2.78451 5.82495 2.78451 5.50837 2.97977 5.3131Z"
        fill="url(#paint0_linear_0_83)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_83"
          x1="13.0338"
          y1="9.25319"
          x2="2.4558"
          y2="8.99334"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#176FF2" />
          <Stop offset="1" stopColor="#196EEE" />
        </LinearGradient>
      </Defs>
    </>
  ),
  16,
  16,
)
