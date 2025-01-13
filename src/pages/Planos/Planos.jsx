import styles from "./Planos.module.scss"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import LogoUp from "../../assets/logoup.png"

export default function Planos(){
    return(
        <div className="stack">
            <ScrollToTop/>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroTitles}>
                        <span className={styles.heroTitle}>Veja detalhes dos nossos planos</span>
                        <span className={`${styles.heroDescription} bodyLarge`}>Estamos trazendo aos bairros mais luxuosos de Belo Horizonte a melhor das experiências de conectividade de toda a região da alta classe.</span>
                    </div>
                </div>
               
            </section>

            <section className={styles.plans}>
                
            </section>

        </div>
    )
}

