import React, { FC } from 'react'
import { Path } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const TicketIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        d="M12.2138 4.1886V6.00322"
        stroke={props.color || '#B8B8B8'}
        strokeWidth="1.34971"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2138 14.3186V15.8363"
        stroke={props.color || '#B8B8B8'}
        strokeWidth="1.34971"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2138 11.7412V8.12622"
        stroke={props.color || '#B8B8B8'}
        strokeWidth="1.34971"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8543 15.9986C17.2206 15.9986 18.3272 14.9057 18.3272 13.5564V11.6125C17.4231 11.6125 16.695 10.8934 16.695 10.0006C16.695 9.10778 17.4231 8.38796 18.3272 8.38796L18.3264 6.44322C18.3264 5.09395 17.219 4.0011 15.8535 4.0011H5.80405C4.43857 4.0011 3.33117 5.09395 3.33117 6.44322L3.33038 8.4513C4.23445 8.4513 4.96255 9.10778 4.96255 10.0006C4.96255 10.8934 4.23445 11.6125 3.33038 11.6125V13.5564C3.33038 14.9057 4.437 15.9986 5.80326 15.9986H15.8543Z"
        stroke={props.color || '#B8B8B8'}
        strokeWidth="1.34971"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  21,
  20,
)
