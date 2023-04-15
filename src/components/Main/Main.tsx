import { MobileView } from "components/MobileView"
import { DesktopView } from "components/DesktopView"
import { useIsMobileMediaQuery } from "hooks/useIsMobileMediaQuery";

const Main = () => {
    const isMobile = useIsMobileMediaQuery()

    if (isMobile) {
        return (
            <MobileView />
        )
    }

    return (
        <DesktopView />
    )
}

export default Main