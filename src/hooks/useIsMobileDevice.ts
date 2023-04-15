import { useIsSSR } from "providers/SSRProvider"
import { MOBILE_SCREEN_WIDTH } from "constants/mobileScreenWidth";

export function useIsMobileDevice(): boolean {
  const isSSR = useIsSSR()

  if (isSSR || typeof window === 'undefined') {
    return false
  }

  return window.screen.width <= MOBILE_SCREEN_WIDTH
}
