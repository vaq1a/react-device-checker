import { useMediaQuery, UseMediaQueryOptions } from "./useMediaQuery"

export function useIsMobileMediaQuery(options?: UseMediaQueryOptions) {
  return useMediaQuery("(max-width: 768px)", options)
}
