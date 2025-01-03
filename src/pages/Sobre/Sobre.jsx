import Nav from "../../components/Nav/Nav"
import styles from "./Sobre.module.scss"
import logoup from "../../assets/logoup.png"

export default function Sobre(){
    return(
        <div className="stack">
            <Nav/>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <img src={logoup} className={styles.logoup}/>
                    <div className={styles.heroTexts}>
                        <span className={`${styles.heroTitle} title1`}>Conheça nossos valores</span>
                        <span className="bodyLarge">Estamos trazendo aos bairros mais luxuosos de Belo Horizonte a melhor das experiências de conectividade de toda a região da alta classe. </span>
                    </div>
                </div>
            </section>
        </div>
    )
}