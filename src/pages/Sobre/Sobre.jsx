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

import Relogio from "../../assets/relogio.png"
import Lampada from "../../assets/lampada.png"
import Alvo from "../../assets/alvo.png"

export default function Sobre(){
    return(
        <div className="stack">
            <ScrollToTop />



            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <img src={logoup} className={styles.logoup}/>
                    <div className={styles.heroTexts}>
                        <span className={`${styles.heroTitle} title1`}>Um pouco da Átria</span>
                        <span className="bodyLarge">Bem-vindo ao futuro da conectividade.
                            velocidade, exclusividade e tecnologia de
                            ponta - tudo pensado para você viver sem
                            limites.
                        </span>
                    </div>
                </div>
            </section>


            <section className={styles.family}>
                <div className={styles.familyContent}>
                    <div className={styles.familyTexts}>
                        <div className={styles.familyFirstBox}>
                            <span className={`${styles.familyTitle} title1`}>Somos uma fámilia</span>
                            <span className={`${styles.familyFirstBoxDescription} bodyMedium`}>
                            Na Átria Digital, acreditamos que oferecer planos de internet de luxo vai além de tecnologia avançada e velocidades incríveis. 
                            Para nós, cada cliente, colaborador e parceiro faz parte de algo maior: uma família.
                            Valorizamos relações baseadas em confiança, cuidado e excelência. 
                            
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
                                    Todos os nossos especialistas são treinados e certificados em tecnologia e em internet.
                                </span>
                            </div>
                            <div className={styles.familyComponent}>
                                <div className={styles.familyComponentTitles}>
                                    <img src={AppIcon} className={styles.familyIcon}/>
                                    <span className="title5">Equipe responsável</span>
                                </div>
                                <span className={`${styles.familyComponentDesc} bodySmall`}>
                                    Nossos colaboradores são comprometidos, motivados e entregam resultados incríveis.
                                </span>
                            </div>
                        </div>
                    </div>
                    <img src={family} className={styles.familyImage}/>
                </div>
            </section>

            <section className={styles.ourValues}>
                <div className={styles.ourContents}>
                    <div className={styles.ourTexts}>
                        <span className={`${styles.ourTitle} title1`}>Nossos valores</span>
                        <span className={`${styles.ourDescription} bodyLarge`}>
                        Na Átria, o foco não é apenas conectar você à internet, mas proporcionar uma experiência superior que reflita inovação e sofisticação.

                        </span>
                    </div>
                    <div className={styles.ourContainer}>
                        <div className={styles.ourRow}>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5862 3.74569C13.1093 2.48809 14.8908 2.48809 15.4139 3.74569L17.8429 9.58569L24.1477 10.0911C25.5053 10.2 26.0559 11.8943 25.0215 12.7804L20.2179 16.8952L21.6854 23.0476C22.0015 24.3724 20.5602 25.4196 19.3978 24.7096L14.0001 21.4127L8.60229 24.7096C7.43992 25.4196 5.99863 24.3724 6.31466 23.0476L7.78223 16.8952L2.97866 12.7804C1.94424 11.8943 2.49476 10.2 3.85246 10.0911L10.1572 9.58569L12.5862 3.74569Z" fill="#E8E120"/>
                                    </svg>
                                    </div>
                                    <span className="title4">Excelência</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>ntregar sempre o melhor, superando expectativas em cada detalhe.</span>
                            </div>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                        <img src={Lampada} className={styles.ourElementIcon}/>
                                    </div>
                                    <span className="title4">Inovação</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Estar à frente do mercado, utilizando as tecnologias mais avançadas para transformar sua experiência.</span>
                            </div>
                        </div>
                        <div className={styles.ourRow}>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                        <img src={Relogio} className={styles.ourElementIcon}/>
                                    </div>
                                    <span className="title4">Compromisso</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Trabalhamos para conectar você ao que realmente importa, com qualidade e responsabilidade.</span>
                            </div>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                        <img src={Alvo} className={styles.ourElementIcon}/>
                                    </div>
                                    <span className="title4">Foco no Cliente</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Monitoramento proativo para identificar e resolver problemas antes mesmo de você perceber.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.porque}>
                <div className={styles.porqueContent}>
                    <div className={styles.porqueTitles}>
                        <span className={`${styles.porqueTitle} title2`}>Por que escolher a Átria?</span>
                        <span className={`${styles.porqueDescription} bodyLarge`}>
                        Em um mercado onde muitas oferecem apenas velocidade, a Átria Digital vai além. 
                        Conectamos você ao futuro com excelência, tecnologia de ponta e um atendimento que faz a diferença. 
                        Nossa missão não é apenas fornecer internet, mas criar uma experiência que reflita sua necessidade de exclusividade, estabilidade e inovação.
                        </span>
                    </div>
                    <img src={logoup} className={styles.porqueImage}/>
                </div>
            </section>


            <Footer/>
        </div>
    )
}