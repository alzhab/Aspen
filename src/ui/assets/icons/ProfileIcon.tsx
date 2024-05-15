import React, { FC } from 'react'
import { Path } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const ProfileIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9873 12.7885C6.76428 12.7885 4.0119 13.2758 4.0119 15.2274C4.0119 17.179 6.74682 17.6838 9.9873 17.6838C13.2103 17.6838 15.9619 17.1957 15.9619 15.2449C15.9619 13.2941 13.2278 12.7885 9.9873 12.7885Z"
        stroke={props.color || '#B8B8B8'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98728 10.0049C12.1024 10.0049 13.8166 8.28984 13.8166 6.17476C13.8166 4.05968 12.1024 2.3454 9.98728 2.3454C7.87221 2.3454 6.15713 4.05968 6.15713 6.17476C6.14998 8.2827 7.85316 9.99778 9.9603 10.0049H9.98728Z"
        stroke={props.color || '#B8B8B8'}
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  20,
  20,
)
