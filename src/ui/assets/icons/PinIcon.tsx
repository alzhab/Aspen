import React, { FC } from 'react'
import { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const PinIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        opacity="0.15"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.82708 14C11.7726 12.6667 14.1604 10.2789 14.1604 7.33333C14.1604 4.38781 11.7726 2 8.82708 2C5.88156 2 3.49374 4.38781 3.49374 7.33333C3.49374 10.2789 5.88156 12.6667 8.82708 14ZM8.82708 9.33333C9.93165 9.33333 10.8271 8.4379 10.8271 7.33333C10.8271 6.22876 9.93165 5.33333 8.82708 5.33333C7.72251 5.33333 6.82708 6.22876 6.82708 7.33333C6.82708 8.4379 7.72251 9.33333 8.82708 9.33333Z"
        fill="url(#paint0_linear_123_19)"
      />
      <Path
        d="M14.1604 7.33333C14.1604 10.2789 11.7726 12.6667 8.82708 14C5.88156 12.6667 3.49374 10.2789 3.49374 7.33333C3.49374 4.38781 5.88156 2 8.82708 2C11.7726 2 14.1604 4.38781 14.1604 7.33333Z"
        fill="url(#paint1_linear_123_19)"
      />
      <Path
        d="M10.8271 7.33333C10.8271 8.4379 9.93165 9.33333 8.82708 9.33333C7.72251 9.33333 6.82708 8.4379 6.82708 7.33333C6.82708 6.22876 7.72251 5.33333 8.82708 5.33333C9.93165 5.33333 10.8271 6.22876 10.8271 7.33333Z"
        fill="url(#paint2_linear_123_19)"
      />
      <Circle cx="8.82709" cy="8" r="2" fill="white" />
      <Defs>
        <LinearGradient
          id="paint0_linear_123_19"
          x1="14.0232"
          y1="10.6538"
          x2="3.09901"
          y2="10.523"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#176FF2" />
          <Stop offset="1" stopColor="#196EEE" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_123_19"
          x1="14.0232"
          y1="10.6538"
          x2="3.09901"
          y2="10.523"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#176FF2" />
          <Stop offset="1" stopColor="#196EEE" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_123_19"
          x1="14.0232"
          y1="10.6538"
          x2="3.09901"
          y2="10.523"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#176FF2" />
          <Stop offset="1" stopColor="#196EEE" />
        </LinearGradient>
      </Defs>
    </>
  ),
  17,
  16,
)
