import styles from "./ButtonSample.module.scss"


export default function ButtonSample(props){
    return(
        <div className={styles.buttonsample} onClick={props.onClick}>
            <span className="bodyBold">{props.children}</span>
        </div>
    )
}