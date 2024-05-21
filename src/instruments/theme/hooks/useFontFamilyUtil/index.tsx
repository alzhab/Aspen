import { useMemo } from 'react'
import { FONTS } from 'configs/Theme'

// Type to represent the keys of fontMapping
type FontKey = keyof typeof FONTS

// Utility to create keys for font props dynamically
export type FontFamilyUtilProps = {
  [K in `ff-${FontKey}`]?: boolean
}

export const useFontFamilyUtil = (props: FontFamilyUtilProps) => {
  return useMemo(() => {
    const fontFamilyKey = (
      Object.keys(props) as (keyof FontFamilyUtilProps)[]
    ).find(key => key.startsWith('ff-') && props[key])

    return fontFamilyKey
      ? FONTS[fontFamilyKey.replace('ff-', '') as FontKey]
      : undefined
  }, [])
}
