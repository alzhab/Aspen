import { useMemo } from 'react'
import { COLORS } from 'configs/Theme'

// Type to represent the keys of fontMapping
type ColorKey = keyof typeof COLORS

// Utility to create keys for font props dynamically
export type BackgroundColorUtilProps = {
  [K in `bg-${ColorKey}`]?: boolean
}

export const useBackgroundColorUtil = (props: BackgroundColorUtilProps) => {
  return useMemo(() => {
    const fontColorKey = (
      Object.keys(props) as (keyof BackgroundColorUtilProps)[]
    ).find(key => key.startsWith('bg-') && props[key])

    return fontColorKey
      ? COLORS[fontColorKey.replace('bg-', '') as ColorKey]
      : undefined
  }, [])
}
