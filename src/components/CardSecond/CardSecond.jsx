import styles from "./CardSecond.module.scss"


export default function CardSecond({image, title, description, ...props}){
    return(
        <div className={styles.CardSecond} {...props}>
            <img src={image} className={styles.image}/>
            <div className={styles.texts}>
                <span className={`${styles.title} title4`}>{title}</span>
                <span className={`${styles.description} bodyMedium`}>{description}</span>
            </div>
        </div>
    )
}