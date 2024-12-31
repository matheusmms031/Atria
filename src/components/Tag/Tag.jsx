import ArrowIcon from "../../assets/Icons/Icons=Arrow-w.svg"
import styles from "./Tag.module.scss"

export default function Tag({children,showMore=false,more="Leia mais"}){
    return(
        <div className={styles.tag}>
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
}