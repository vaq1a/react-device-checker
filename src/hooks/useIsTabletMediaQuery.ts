import { useMediaQuery, UseMediaQueryOptions } from './useMediaQuery'

export function useIsTabletMediaQuery(options?: UseMediaQueryOptions) {
  return useMediaQuery('(max-width: 1024px)', options)
}
