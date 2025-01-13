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
                        <span className={`${styles.heroTitle} title1`}>Conheça mais da Átria</span>
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

            <section className={styles.ourValues}>
                <div className={styles.ourContents}>
                    <div className={styles.ourTexts}>
                        <span className={`${styles.ourTitle} title1`}>Nossos valores</span>
                        <span className={`${styles.ourDescription} bodyMedium`}>
                            Our story is one of continuous growth and evolution. 
                            We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
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
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Trust is the cornerstone of every successful real estate transaction.</span>
                            </div>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.625 4.875C8.625 2.45875 10.5838 0.5 13 0.5C15.4162 0.5 17.375 2.45875 17.375 4.875C17.375 7.29125 15.4162 9.25 13 9.25C10.5838 9.25 8.625 7.29125 8.625 4.875Z" fill="#E8E120"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.375 8.375C17.375 6.442 18.942 4.875 20.875 4.875C22.808 4.875 24.375 6.442 24.375 8.375C24.375 10.308 22.808 11.875 20.875 11.875C18.942 11.875 17.375 10.308 17.375 8.375Z" fill="#E8E120"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.625 8.375C1.625 6.442 3.192 4.875 5.125 4.875C7.058 4.875 8.625 6.442 8.625 8.375C8.625 10.308 7.058 11.875 5.125 11.875C3.192 11.875 1.625 10.308 1.625 8.375Z" fill="#E8E120"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3615 14.6371C7.75914 12.4518 10.2097 11 13 11C15.7906 11 18.2415 12.4522 19.639 14.6379C20.6052 16.149 21.0232 17.9711 20.8271 19.7476C20.7965 20.0252 20.6351 20.2715 20.3929 20.4105C18.2143 21.6606 15.6893 22.375 13 22.375C10.3107 22.375 7.78569 21.6606 5.60712 20.4105C5.36486 20.2715 5.20351 20.0252 5.17287 19.7476C4.97676 17.9707 5.39498 16.1483 6.3615 14.6371Z" fill="#E8E120"/>
                                            <path d="M4.92933 13.6293C4.91528 13.6509 4.90132 13.6725 4.88744 13.6942C3.76107 15.4554 3.24559 17.5528 3.40383 19.6205C2.69445 19.5128 2.00615 19.3394 1.3455 19.1068L1.21138 19.0595C0.966718 18.9734 0.795765 18.7512 0.775189 18.4926L0.76391 18.3509C0.754687 18.235 0.75 18.1179 0.75 18C0.75 15.6493 2.60389 13.7316 4.92933 13.6293Z" fill="#E8E120"/>
                                            <path d="M22.5966 19.6204C22.7548 17.5532 22.2396 15.4562 21.1136 13.6952C21.0995 13.6732 21.0854 13.6512 21.0711 13.6293C23.3963 13.7319 25.25 15.6495 25.25 18C25.25 18.1179 25.2453 18.235 25.2361 18.3509L25.2248 18.4926C25.2042 18.7512 25.0333 18.9734 24.7886 19.0595L24.6545 19.1068C23.994 19.3394 23.3058 19.5127 22.5966 19.6204Z" fill="#E8E120"/>
                                        </svg>
                                    </div>
                                    <span className="title4">Coletividade</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Trust is the cornerstone of every successful real estate transaction.</span>
                            </div>
                        </div>
                        <div className={styles.ourRow}>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1498 3.2729C14.3731 3.17531 14.6271 3.17531 14.8504 3.2729C19.189 5.16852 23.301 7.48583 27.1345 10.1729C27.4119 10.3673 27.5521 10.7045 27.4945 11.0383C27.4368 11.3721 27.1916 11.6427 26.865 11.7328C26.066 11.9534 25.2738 12.191 24.4888 12.4441C21.3025 13.4717 18.2354 14.7647 15.3133 16.297L15.3095 16.299C15.177 16.3685 15.0449 16.4384 14.913 16.5089C14.6553 16.6466 14.3459 16.6466 14.0883 16.5089C13.9551 16.4378 13.8217 16.3671 13.6879 16.297C12.243 15.5393 10.7627 14.8401 9.25 14.2026V13.9417C9.25 13.7884 9.32866 13.6524 9.45035 13.5787C11.2063 12.5149 13.0176 11.5333 14.8789 10.6393C15.3145 10.4301 15.498 9.90734 15.2887 9.47173C15.0795 9.03613 14.5568 8.85262 14.1211 9.06185C12.2087 9.98046 10.3477 10.989 8.54358 12.082C8.01463 12.4024 7.65904 12.9269 7.54208 13.5145C6.54467 13.1308 5.53415 12.7734 4.51134 12.4436C3.72638 12.1904 2.93418 11.9534 2.13513 11.7328C1.80856 11.6427 1.56337 11.3721 1.50571 11.0383C1.44806 10.7044 1.58829 10.3673 1.86572 10.1729C5.6992 7.48581 9.81114 5.16852 14.1498 3.2729Z" fill="#E8E120"/>
                                            <path d="M15.7377 18.0524C18.583 16.5321 21.5724 15.2468 24.6801 14.2224C24.8367 15.873 24.9367 17.54 24.9781 19.2215C24.987 19.5822 24.7735 19.9114 24.4405 20.0505C21.1142 21.4392 17.9503 23.1398 14.9853 25.1157C14.6914 25.3115 14.3086 25.3115 14.0148 25.1157C11.0498 23.1398 7.88585 21.4392 4.55953 20.0505C4.22652 19.9114 4.01302 19.5822 4.02191 19.2215C4.06334 17.5399 4.16335 15.8728 4.31999 14.222C5.39448 14.5762 6.45484 14.9616 7.5 15.377V16.8592C6.97692 17.1618 6.625 17.7273 6.625 18.3751C6.625 18.9529 6.90509 19.4654 7.33692 19.7841C7.23249 20.2281 7.07793 20.6627 6.87323 21.0788C7.40138 21.3281 7.925 21.5853 8.44395 21.8505C8.73951 21.2494 8.95381 20.6184 9.08683 19.9742C9.69857 19.7015 10.125 19.0881 10.125 18.3751C10.125 17.7273 9.77308 17.1618 9.25 16.8592V16.107C10.6166 16.7041 11.9553 17.3534 13.2636 18.0524C14.0366 18.4654 14.9647 18.4654 15.7377 18.0524Z" fill="#E8E120"/>
                                            <path d="M5.70593 22.7061C6.19492 22.2171 6.58419 21.6663 6.87323 21.0788C7.40138 21.3281 7.925 21.5853 8.44395 21.8505C8.0723 22.6063 7.57191 23.315 6.94336 23.9435C6.60166 24.2852 6.04764 24.2852 5.70593 23.9435C5.36422 23.6018 5.36422 23.0478 5.70593 22.7061Z" fill="#E8E120"/>
                                        </svg>
                                    </div>
                                    <span className="title4">Aprendizado</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Trust is the cornerstone of every successful real estate transaction.</span>
                            </div>
                            <div className={styles.ourElement}>
                                <div className={styles.ourElementTitle}>
                                    <div className={styles.ourElementIconContainer}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 28V25.0526H12.6V8.58421C11.9933 8.36316 11.4683 8.0193 11.025 7.55263C10.5817 7.08597 10.255 6.53334 10.045 5.89474H5.6L9.8 16.2105C9.8 17.4386 9.32167 18.4825 8.365 19.3421C7.40833 20.2018 6.25333 20.6316 4.9 20.6316C3.54667 20.6316 2.39167 20.2018 1.435 19.3421C0.478334 18.4825 0 17.4386 0 16.2105L4.2 5.89474H1.4V2.94737H10.045C10.325 2.08772 10.8267 1.38183 11.55 0.829687C12.2733 0.277546 13.09 0.000985064 14 2.60829e-06C14.91 -0.000979848 15.7267 0.275582 16.45 0.829687C17.1733 1.38379 17.675 2.08969 17.955 2.94737H26.6V5.89474H23.8L28 16.2105C28 17.4386 27.5217 18.4825 26.565 19.3421C25.6083 20.2018 24.4533 20.6316 23.1 20.6316C21.7467 20.6316 20.5917 20.2018 19.635 19.3421C18.6783 18.4825 18.2 17.4386 18.2 16.2105L22.4 5.89474H17.955C17.745 6.53334 17.4183 7.08597 16.975 7.55263C16.5317 8.0193 16.0067 8.36316 15.4 8.58421V25.0526H28V28H0ZM20.475 16.2105H25.725L23.1 9.8L20.475 16.2105ZM2.275 16.2105H7.525L4.9 9.8L2.275 16.2105ZM14 5.89474C14.3967 5.89474 14.7294 5.75327 14.9982 5.47032C15.267 5.18737 15.4009 4.83762 15.4 4.42105C15.3991 4.00449 15.2647 3.65474 14.9968 3.37179C14.7289 3.08884 14.3967 2.94737 14 2.94737C13.6033 2.94737 13.2711 3.08884 13.0032 3.37179C12.7353 3.65474 12.6009 4.00449 12.6 4.42105C12.5991 4.83762 12.7335 5.18786 13.0032 5.47179C13.2729 5.75572 13.6052 5.8967 14 5.89474Z" fill="#E8E120"/>
                                        </svg>
                                    </div>
                                    <span className="title4">Justiça</span>
                                </div>
                                <span className={`${styles.ourElementDescription} bodyMedium`}>Trust is the cornerstone of every successful real estate transaction.</span>
                            </div>
                        </div>
                    </div>
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
        </div>
    )
}