import { useMemo } from 'react'

// Utility to create keys for font props dynamically
export type BorderRadiusUtilProps = {
  [K in `br-${number}`]?: boolean
}

const BORDER_KEYS = {
  ['tl']: 'borderTopLeftRadius',
  ['tr']: 'borderTopRightRadius',
  ['bl']: 'borderBottomLeftRadius',
  ['br']: 'borderBottomRightRadius',
}

export const useBorderRadiusUtil = (props: BorderRadiusUtilProps) => {
  return useMemo(() => {
    const filteredProps = Object.keys(props) as (keyof BorderRadiusUtilProps)[]

    const borderRadius = filteredProps.filter(
      key => key.startsWith('br-') && props[key],
    )

    return borderRadius.reduce((acc, item) => {
      const items = item.replace('br-', '').split('-')

      if (items.length === 1) {
        acc.borderRadius = +items[0]
      } else {
        acc[(BORDER_KEYS as any)[item[0]]] = +items[1]
      }

      return acc
    }, {} as any)

    /*
     * br-
     * br-tl-
     * br-tr-
     * br-bl-
     * br-br-
     * */
  }, [])
}
