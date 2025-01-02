import styles from "./FeatureBox.module.scss"


export default function FeatureBox({image, title, description}){
    return(
        <div className={styles.FeatureBox}>
            <div className={styles.titleBox}>
                <img src={image} className={styles.image} />
                <span className={styles.title}>{title}</span>
            </div>
            <span className={`${styles.description} bodyMedium`}>{description}</span>
        </div>
    )
}