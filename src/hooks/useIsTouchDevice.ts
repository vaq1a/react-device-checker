import { useMediaQuery } from './useMediaQuery'

export function useIsTouchDevice() {
  return useMediaQuery('((hover: none) and (pointer: coarse))')
}
