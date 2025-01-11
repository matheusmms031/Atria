import styles from "./Sobre.module.scss"
import logoup from "../../assets/logoup.png"
import family from "../../assets/family.svg"
import AppIcon from "../../assets/Icons/Icons=App-w.svg"
import Footer from "../../components/Footer/Footer.jsx"
import Publish from "../../components/Publish/Publish.jsx"
import stylesHome from "../Home/Home.module.scss"
import Tag from "../../components/Tag/Tag.jsx"
import Employee from "../../components/Employee/Employee.jsx"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx"

export default function Sobre(){
    return(
        <div className="stack">
            <ScrollToTop />



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
                    <div className={styles.familyTexts}>
                        <div className={styles.familyFirstBox}>
                            <span className={`${styles.familyTitle} title1`}>Somos uma fámilia</span>
                            <span className={`${styles.familyFirstBoxDescription} bodyMedium`}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </span>
                            <img src={family} className={styles.familyImageMobile}/>
                        </div>
                        <div className={styles.familySecondBox}>
                        <div className={styles.familyComponent}>
                                <div className={styles.familyComponentTitles}>
                                    <img src={AppIcon} className={styles.familyIcon}/>
                                    <span className="title5">Especialistas selecionados</span>
                                </div>
                                <span className={`${styles.familyComponentDesc} bodySmall`}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </span>
                            </div>
                            <div className={styles.familyComponent}>
                                <div className={styles.familyComponentTitles}>
                                    <img src={AppIcon} className={styles.familyIcon}/>
                                    <span className="title5">Especialistas selecionados</span>
                                </div>
                                <span className={`${styles.familyComponentDesc} bodySmall`}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </span>
                            </div>
                        </div>
                    </div>
                    <img src={family} className={styles.familyImage}/>
                </div>
            </section>


            <section className={styles.equipe}>
                <div className={styles.equipeContent}>
                    <div className={styles.equipeTexts}>
                        <Tag>Saiba mais sobre nós</Tag>
                        <div className={styles.equipeTitles}>
                            <span className={`${styles.equipeTitle} title2`}>Conheça a nossa equipe</span>
                            <span className={`${styles.equipeDescription} bodyLarge`}>
                                A nossa equipe é formada por profissionais robustos e centrados 
                                para fornecer a melhor internet de toda a Belo Horizonte
                            </span>
                        </div>
                    </div>
                    <div className={styles.equipeBox}>
                        <Employee/>
                        <Employee/>
                        <Employee/>
                    </div>
                </div>
            </section>


            <Footer/>
            <Publish/>
        </div>
    )
}