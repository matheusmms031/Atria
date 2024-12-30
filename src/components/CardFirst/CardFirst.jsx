import styles from "./CardFirst.modules.scss"

export default function CardFirst(props){
    return(
        <div className={styles.CardFirst}>
            <div className={styles.BoxIcon}>
                <img src={props.image} className={styles.image}/>
            </div>
            <div className={styles.BoxDescription}>
                <span className={`${styles.title} title5`}>{props.title}</span>
                <span className={`${styles.description} description`}>{props.description}</span>
            </div>
        </div>
    )
}
