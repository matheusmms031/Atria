import styles from "./CardFirst.module.scss"

export function CardFirst({image, title, description}){
    return(
        <div className={styles.CardFirst}>
            <div className={styles.BoxIcon}>
                <img src={image} className={styles.image}/>
            </div>
            <div className={styles.BoxDescription}>
                <span className={`${styles.title} title5`}>{title}</span>
                <span className={`${styles.description} bodyMedium`}>{description}</span>
            </div>
        </div>
    )
}
