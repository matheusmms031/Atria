import styles from "./Nav.module.scss"
import image from "../../assets/logo_linear.png"
export default function Nav(){
    return(
        <div className={styles.box}>
            <img src={image} className={styles.img}/>
            <div className={styles.items}>
                <span className="bodyMedium">Home</span>
                <span className="bodyMedium">Sobre</span>
                <span className="bodyMedium">Planos</span>
                <span className="bodyMedium">Contato</span>
            </div>

        </div>
    )
}