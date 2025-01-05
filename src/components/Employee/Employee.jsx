import styles from "./Employee.module.scss"
import avatar from "../../assets/Icons/avatar.svg"


export default function Employee({employeeImage=avatar,name="Marcelino Ferreira Neto",job="Gerente de TI"}){
    return(
        <div className={styles.employee}>
            <img src={employeeImage} className={styles.employeeImage}/>
            <div className={styles.texts}>
                <span className={`${styles.name} bodyLarge`}>{name}</span>
                <span className={`${styles.job} bodyMedium`}>{job}</span>
            </div>
        </div>
    )
}