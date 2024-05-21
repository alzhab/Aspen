import { useMemo } from 'react'
import { COLORS } from 'configs/Theme'

// Type to represent the keys of fontMapping
type ColorKey = keyof typeof COLORS

// Utility to create keys for font props dynamically
export type FontColorUtilProps = {
  [K in `c-${ColorKey}`]?: boolean
}

export const useFontColorUtil = (props: FontColorUtilProps) => {
  return useMemo(() => {
    const fontColorKey = (
      Object.keys(props) as (keyof FontColorUtilProps)[]
    ).find(key => key.startsWith('c-') && props[key])

    return fontColorKey
      ? COLORS[fontColorKey.replace('c-', '') as ColorKey]
      : undefined
  }, [])
}
