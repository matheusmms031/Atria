import ArrowIcon from "../../assets/Icons/Icons=Arrow-w.svg"
import styles from "./Tag.module.scss"
import { forwardRef } from "react"

const Tag = forwardRef(({children,showMore=false,more="Leia mais", ...props}, ref) => {
    
    return(
        <div className={styles.tag} {...props} ref={ref}>
            <div className={styles.tagContent}>
                <span className={styles.tagInfo}>{children}</span>
                {
                    showMore && (
                <div className={styles.tagMore}>
                    <span className={styles.tagMoreText}>{more}</span>
                    <img src={ArrowIcon} alt="arrow" className={styles.arrow}/>
                </div>
                    )
                }
            </div>
        </div>
    )
})

export default Tag;