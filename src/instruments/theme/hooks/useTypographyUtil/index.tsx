import { useMemo } from 'react'
import { TYPOGRAPHY } from 'configs/Theme'

// Type to represent the keys of fontMapping
type TypographyKey = keyof typeof TYPOGRAPHY

// Utility to create keys for font props dynamically
export type FontTypographyUtilProps = {
  [K in `typ-${TypographyKey}`]?: boolean
}

export const useFontTypographyUtil = (props: FontTypographyUtilProps) => {
  return useMemo(() => {
    const fontTypographyKey = (
      Object.keys(props) as (keyof FontTypographyUtilProps)[]
    ).find(key => key.startsWith('typ-') && props[key])

    return fontTypographyKey
      ? TYPOGRAPHY[fontTypographyKey.replace('typ-', '') as TypographyKey]
      : TYPOGRAPHY.default
  }, [])
}
