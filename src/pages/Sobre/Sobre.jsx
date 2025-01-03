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
            <section className={styles.family}>
                <div className={styles.familyContent}>
                    <img/>
                    <div className={styles.familyTexts}>
                        <div className={styles.familyFirstBox}>
                            <span className="title2">Somos uma fámilia</span>
                            <span className="bodyMedium">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </span>
                        </div>
                        <div className={styles.familySecondBox}>
                            <div className={styles.familyComponent}>
                                <img/>
                                <span className="title5">Especialistas selecionados</span>
                                <span className="bodySmall">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </span>
                            </div>
                            <div className={styles.familyComponent}>
                                <img/>
                                <span className="title5">Especialistas selecionados</span>
                                <span className="bodySmall">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}