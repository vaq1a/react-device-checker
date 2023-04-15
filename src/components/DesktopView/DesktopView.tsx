import { classNames } from "helpers"

import styles from './DesktopView.module.scss'

const DesktopView = () => {
    return (
        <div className={classNames(styles.title)}>
            Desktop view
        </div>
    )
}

export default DesktopView
