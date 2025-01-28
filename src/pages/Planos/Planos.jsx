import styles from "./Planos.module.scss"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import LogoUp from "../../assets/logoup.png"
import ButtonSample from "../../components/ButtonSample/ButtonSample"
import Footer from "../../components/Footer/Footer"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import video from "../../assets/fundo_planos.mp4"

export default function Planos(){

    const title = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        gsap.fromTo(img.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out",});
        gsap.fromTo(title.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out",delay: 0.20});
    })

    return(
        <div className="stack">
            <ScrollToTop/>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroTitles}>
                        <span className={styles.heroTitle} ref={img}>Detalhes dos nossos planos</span>
                        <span className={`${styles.heroDescription} bodyLarge`} ref={title}>
                            Cada plano foi pensado para oferecer soluções específicas, atendendo desde pequenas demandas até as necessidades mais avançadas. 
                            Escolha a Átria Digital e conecte-se ao que há de melhor.
                        </span>
                    </div>
                </div>
            </section>

            <div className={styles.videoBox}>
                <video autoPlay muted loop className={styles.video} src={video} ref={videoref}/>
            </div>


            <section className={styles.plans}>
                <div className={styles.plansContent} id="turbo">
                    <div className={styles.plansFirstBox}>
                        <div className={styles.plansTitleBox}>
                            <span className={styles.plansPlan}>Plano</span>
                            <span className={`${styles.plansTitle} title2`}>Turbo</span>
                            <span className={styles.plansVelocity}>600 Mbp/s</span>
                        </div>
                        <span className={`${styles.plansDescription} bodyLarge`}>
                        Ideal para pequenos negócios e flats, o Plano Turbo oferece conectividade confiável e eficiente, garantindo o desempenho necessário para atividades cotidianas. 
                        </span>
                        <ButtonSample style={{alignSelf:"stretch"}} onClick={() => {window.open(`https://api.whatsapp.com/send?phone=3123331401&text=Estou interessado pelo plano Turbo`,"_blank")}}>
                            Assine já
                        </ButtonSample>
                    </div>
                    <div className={styles.plansSecondBox}>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>600 Mega</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Conexão estável para navegação, videochamadas e sistemas básicos de automação.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Roteador Wi-Fi 6</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Tecnologia de ponta para maior alcance e performance em ambientes menores.
                                </span>
                            </div>
                        </div>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Atendimento 24h</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Suporte técnico disponível a qualquer momento, para sua tranquilidade e conveniência.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.plans}>
                <div className={styles.plansContent} id="ultra">
                    <div className={styles.plansFirstBox}>
                        <div className={styles.plansTitleBox}>
                            <span className={styles.plansPlan}>Plano</span>
                            <span className={`${styles.plansTitle} title2`}>Ultra</span>
                            <span className={styles.plansVelocity}>800 Mbp/s</span>
                        </div>
                        <span className={`${styles.plansDescription} bodyLarge`}>
                        Perfeito para residências conectadas, esse plano atende às necessidades de streaming em alta definição, múltiplos dispositivos e automação básica.

                        </span>
                        <ButtonSample style={{alignSelf:"stretch"}} onClick={() => {window.open(`https://api.whatsapp.com/send?phone=3123331401&text=Estou interessado pelo plano Ultra`,"_blank")}}>
                            Assine já
                        </ButtonSample>
                    </div>
                    <div className={styles.plansSecondBox}>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>800 Mega</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Ideal para streaming em HD, chamadas de vídeo de alta qualidade e uso simultâneo de dispositivos.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Wi-Fi 6</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Tecnologia moderna para garantir uma conexão estável e eficiente em toda a residência.
                                </span>
                            </div>
                        </div>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Rede Mesh</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                Cobertura Wi-Fi ampliada, garantindo conexão de alta qualidade em todos os cômodos.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Atendimento 24h</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Atendimento disponível a qualquer momento do seu dia.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.plans}>
                <div className={styles.plansContent} id="premium">
                    <div className={styles.plansFirstBox}>
                        <div className={styles.plansTitleBox}>
                            <span className={styles.plansPlan}>Plano</span>
                            <span className={`${styles.plansTitle} title2`}>Premium</span>
                            <span className={styles.plansVelocity}>1 Gbp/s</span>
                        </div>
                        <span className={`${styles.plansDescription} bodyLarge`}>
                            Projetado especialmente para usuários que exigem alta performance, o Plano Premium oferece velocidade e desempenho. 
                        </span>
                        <ButtonSample style={{alignSelf:"stretch"}} onClick={() => {window.open(`https://api.whatsapp.com/send?phone=3123331401&text=Estou interessado pelo plano Premium`,"_blank")}}>
                            Assine já
                        </ButtonSample>
                    </div>
                    <div className={styles.plansSecondBox}>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>1 Giga</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Conexão ultrarrápida para jogos online, streaming 4K e múltiplos dispositivos.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Wi-Fi 6</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Tecnologia moderna para garantir uma conexão estável e eficiente em toda a residência.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>NoPing</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Redução de latência para jogos online e partidas sem restrições.
                                </span>
                            </div>
                        </div>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>IP Fixo</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Segurança e facilidade para configurar servidores ou aplicações específicas.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>SLA de 6h</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Atendimento técnico prioritário em até 6 horas.
                                </span>
                                <span className={styles.condicao}>* Consulte condições</span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>NAT Aberto</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Partidas online sem restrições, conexões mais rápidas e menor latência, garantindo máxima performance.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.plans}>
                <div className={styles.plansContent} id="master">
                    <div className={styles.plansFirstBox}>
                        <div className={styles.plansTitleBox}>
                            <span className={styles.plansPlan}>Plano</span>
                            <span className={`${styles.plansTitle} title2`}>Master</span>
                            <span className={styles.plansVelocity}>2 Gbp/s</span>
                        </div>
                        <span className={`${styles.plansDescription} bodyLarge`}>
                        O Plano Master é o ápice da conectividade.
                         Desenvolvido para clientes que exigem o máximo em desempenho e atendimento, combina a tecnologia mais avançada com suporte privilegiado. 
                        </span>
                        <ButtonSample style={{alignSelf:"stretch"}} onClick={() => {window.open(`https://api.whatsapp.com/send?phone=3123331401&text=Estou interessado pelo plano Master`,"_blank")}}> 
                            Assine já
                        </ButtonSample>
                    </div>
                    <div className={styles.plansSecondBox}>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>2 Giga</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Conexão ultrarrápida para streaming em 8K, jogos online de alto desempenho e automação residencial avançada.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Wi-Fi 7</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                O mais moderno padrão de Wi-Fi, garantindo maior alcance, velocidade e eficiência.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Atendimento selecionado</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Acesso direto ao suporte técnico sem passar por call center.
                                </span>
                            </div>
                        </div>
                        <div className={styles.plansRow}>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Cobertura total</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Cobertura impecável para grandes residências e ambientes de alta demanda.
                                </span>
                                <span className={styles.condicao}>* Consulte condições</span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>Suporte de conexão</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                Suporte para conexões de aparelhos a internet quando necessário.
                                </span>
                            </div>
                            <div className={styles.plansComponent}>
                                <div className={styles.plansComponentTitle}>
                                    <img src={LogoUp} alt="Logo Up" className={styles.plansComponentIcon}/>
                                    <span className={`${styles.plansComponentTitle} bodyLarge`}>IP Fixo</span>
                                </div>
                                <span className={`${styles.plansComponentDescription} bodyMedium`}>
                                    Mais segurança e controle para suas aplicações
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

