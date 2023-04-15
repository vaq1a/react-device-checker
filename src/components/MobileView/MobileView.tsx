import { classNames } from "helpers"

import styles from './MobileView.module.scss'

const MobileView = () => {
    return (
        <div className={classNames(styles.title)}>
            Mobile view
        </div>
    )
}

export default MobileView
