import { useMemo } from 'react'

// Utility to create keys for font props dynamically
export type MarginUtilProps = {
  [K in `m-${number}`]?: boolean
}

const MARGIN_KEYS = {
  ['b']: 'marginBottom',
  ['t']: 'marginTop',
  ['l']: 'marginLeft',
  ['r']: 'marginRight',
  ['h']: 'marginHorizontal',
  ['v']: 'marginVertical',
}

export const useMarginUtil = (props: MarginUtilProps) => {
  return useMemo(() => {
    const filteredProps = Object.keys(props) as (keyof MarginUtilProps)[]

    const margin = filteredProps.filter(
      key => key.startsWith('m-') && props[key],
    )

    return margin.reduce((acc, item) => {
      const items = item.replace('m-', '').split('-')

      if (items.length === 1) {
        acc.margin = +items[0]
      } else {
        acc[(MARGIN_KEYS as any)[items[0]]] = +items[1]
      }

      // console.log(acc)

      return acc
    }, {} as any)

    /*
     * m
     * m-b
     * m-t
     * m-l
     * m-r
     * m-h
     * m-v
     * */
  }, [])
}
