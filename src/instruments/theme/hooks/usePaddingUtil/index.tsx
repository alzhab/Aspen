import { useMemo } from 'react'

// Utility to create keys for font props dynamically
export type PaddingUtilProps = {
  [K in `p-${number}`]?: boolean
}

const PADDING_KEYS = {
  ['b']: 'paddingBottom',
  ['t']: 'paddingTop',
  ['l']: 'paddingLeft',
  ['r']: 'paddingRight',
  ['h']: 'paddingHorizontal',
  ['v']: 'paddingVertical',
}

export const usePaddingUtil = (props: PaddingUtilProps) => {
  return useMemo(() => {
    const filteredProps = Object.keys(props) as (keyof PaddingUtilProps)[]

    const padding = filteredProps.filter(
      key => key.startsWith('p-') && props[key],
    )

    return padding.reduce((acc, item) => {
      const items = item.replace('p-', '').split('-')

      if (items.length === 1) {
        acc.padding = +items[0]
      } else {
        acc[(PADDING_KEYS as any)[items[0]]] = +items[1]
      }

      // console.log(acc)

      return acc
    }, {} as any)

    /*
     * p
     * p-b
     * p-t
     * p-l
     * p-r
     * p-h
     * p-v
     * */
  }, [])
}
