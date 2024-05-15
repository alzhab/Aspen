import React, { FC } from 'react'
import { Path } from 'react-native-svg'
import { baseIcon, IIconProps } from '@corrbo/module-icon'

export const FoodIcon: FC<IIconProps> = baseIcon(
  props => (
    <>
      <Path
        d="M26 1C26.6566 1 27.3068 1.12933 27.9134 1.3806C28.52 1.63188 29.0712 2.00017 29.5355 2.46447C29.9998 2.92876 30.3681 3.47995 30.6194 4.08658C30.8707 4.69321 31 5.34339 31 6C31 12.389 29.408 19.187 27 20.693V31H25V20.694C22.636 19.216 21.058 12.632 21.002 6.345L21 6L21.005 5.783C21.0609 4.49575 21.6116 3.27978 22.5422 2.38866C23.4728 1.49754 24.7115 1.00007 26 1V1ZM17 1V19.118C19.317 19.675 21 22.128 21 25C21 28.27 18.817 31 16 31C13.183 31 11 28.27 11 25C11 22.128 12.683 19.674 15 19.118V1H17ZM2 1H3C7.47 1 9.934 7.365 9.999 19.505L10 21H3.999L4 31H2V1ZM16 21C14.398 21 13 22.748 13 25C13 27.252 14.398 29 16 29C17.602 29 19 27.252 19 25C19 22.748 17.602 21 16 21ZM4 3.239V19H7.995L7.978 18.036L7.951 17.087C7.673 9.157 6.235 4.623 4.224 3.364L4.104 3.294L4 3.239ZM23.005 5.824L23 6L23.002 6.31C23.047 10.631 24.033 15.443 25.001 17.7V3.17C24.4441 3.36693 23.9577 3.72379 23.6026 4.19588C23.2476 4.66797 23.0397 5.23432 23.005 5.824V5.824ZM27.001 3.171V17.697C27.99 15.387 29 10.4 29 6C29 5.37955 28.8076 4.77437 28.4495 4.26774C28.0913 3.76111 27.5849 3.37795 27 3.171H27.001Z"
        fill="#B8B8B8"
      />
    </>
  ),
  32,
  32,
)