import { useState, useEffect, useRef} from 'react'
import styles from "./Home.module.scss"
import video from "../../assets/fundo.mp4"
import ButtonSample from "../../components/ButtonSample/ButtonSample.jsx"
import { CardFirst } from "../../components/CardFirst/CardFirst"


import globo from "../../assets/globo.png"
import premier from "../../assets/premier.png"
import telecine from "../../assets/telecine.png"

import Grafico from "../../assets/grafico.png"
import Parede from "../../assets/parede.png"


import WhatsappIcon from "../../assets/Icons/Icons=Whatsapp.svg"
import WhatsappIconW from "../../assets/Icons/Icons=Whatsapp-w.svg"
import HomeW from "../../assets/Icons/Icons=Home-w.svg"
import HelpW from "../../assets/Icons/Icons=Help-w.svg"
import TvW from "../../assets/Icons/Icons=Tv-w.svg"
import WifiIcon from "../../assets/Icons/Icons=Wifi.svg"
import WifiIconW from "../../assets/Icons/Icons=Wifi-w.svg"
import AppIcon from "../../assets/Icons/Icons=App.svg"
import AppIconW from "../../assets/Icons/Icons=App-w.svg"
import HuaweiW from "../../assets/Icons/Icons=Huawei-w.svg"
import RouterW from "../../assets/Icons/Icons=Roteador-w.svg"



import Tag from "../../components/Tag/Tag.jsx"
import CardSecond from "../../components/CardSecond/CardSecond.jsx"
import FeatureBox from "../../components/FeatureBox/FeatureBox"
import Footer from "../../components/Footer/Footer.jsx"
import PlanCard from "../../components/PlanCard/PlanCard.jsx"
import Publish from "../../components/Publish/Publish.jsx"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Home(){
    const TitleRef = useRef(null)
    const TagRef = useRef(null)
    const DescRef = useRef(null)
    const boxRef = useRef(null)

    const ButtonRef = useRef(null)
    const tl = gsap.timeline()
    const [count, setCount] = useState(0)

    const handleMouseEnter = () => {
        gsap.to(ButtonRef.current, {
          scale: 1.2,
          duration: 0.3,
          backgroundColor: "#E8E120",
          ease: "power1.out",
        });
      };
    
      const handleMouseLeave = () => {
        gsap.to(ButtonRef.current, {
          scale: 1,
          duration: 0.3,
          backgroundColor: "#ffffff",
          ease: "power1.out",
        });
      };

    useEffect(() => {

        gsap.fromTo(TagRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out",});
        gsap.fromTo(TitleRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out",delay: 0.20});
        gsap.fromTo(DescRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out" , delay: 0.40});
        gsap.fromTo(ButtonRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out" , delay: 0.60});

        gsap.fromTo(
            boxRef.current,
            { opacity: 0, y: 100 }, // Estado inicial
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: boxRef.current, // Elemento que dispara o ScrollTrigger
                start: "top 80%", // Quando a parte superior do gatilho atinge 80% da altura da viewport
                end: "top 20%", // Fim da animação
                scrub: true, // Sincroniza a animação com o scroll
              },
            }
          );
    })
    

    return(
        <div className="stack">
            <ScrollToTop />
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <Tag showMore={true} ref={TagRef}>Conheça nossas vantagens</Tag>
                    <span className={styles.titleFirst} ref={TitleRef}>Internet de verdade <br/><span>como você nunca viu.</span></span>
                    <span className={`${styles.heroDescription} bodyLarge`} ref={DescRef} >Seja premium com a Atria Digital: tecnologia de última geração e atendimento de alto
                    padrão.</span>
                    <ButtonSample 
                        onClick={() => console.log("Clicou no botão")} 
                        ref={ButtonRef} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            Conheça nossos planos
                    </ButtonSample>
                </div>
                <video autoPlay muted loop className={styles.video} src={video}/>
            </section>

            <section className={styles.features}>
                <div className={styles.featuresContent}>
                    <span className={`${styles.featuresTitle} title2`}>Veja nossos diferenciais</span>
                    <div className={styles.featuresBoxesLines}>
                        <div className={styles.featuresBoxesCollumns}>
                            <FeatureBox image={WhatsappIconW} title="Rápida velocidade" description="Velocidade rápida de navegação garantida pela alta banda larga."/>
                            <FeatureBox image={AppIconW} title="Aplicativo próprio" description="Disponibilidade de acessar seu plano atráves do aplicativo."/>
                            <FeatureBox image={WifiIconW} title="Planos com Wifi-7" description="Wifi-7 é a versão mais recente e consolidade para performance."/>
                        </div>
                        <div className={styles.featuresBoxesCollumns}>
                            <FeatureBox image={HelpW} title="Suporte 24 horas" description="Nossa equipe está pronta para atender você a qualquer dia."/>
                            <FeatureBox image={HomeW} title="Atendimento à domícilio" description="Atendimento diretamente no local feito por técnico especializado."/>
                            <FeatureBox image={TvW} title="Planos com Streaming" description="Possibilidade de encaixar combos de streamings na assinatura."/>
                        </div>
                        <div className={styles.featuresBoxesCollumns}>
                            <FeatureBox image={HelpW} title="Atendimento rápido" description="Nossa equipe responde suas questões em até 3 horas."/>
                            <FeatureBox image={HuaweiW} title="Roteadores Huawei" description="Atendimento diretamente no local feito por técnico especializado."/>
                            <FeatureBox image={RouterW} title="Planos multi pontos" description="Dependendo do plano escolhido o cliente tem mais pontos na residência"/>
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.inovation}>
                <div className={styles.inovationContent}>
                    <div className={styles.inovationTexts}>
                        <span className={`${styles.inovationTitle} title2`}> Viemos para inovar </span>
                        <span className={`${styles.inovationDescription} bodyLarge`}>
                        Estamos nos bairros Belvedere e Vila da Serra a melhor das experiências de conectividade de toda a região.
                        </span>
                    </div>
                    <div className={styles.inovationCards}>
                        <CardFirst image={WhatsappIcon} title="Suporte por Whatsapp" description="Estamos no Whatsapp para solucionar problemas a distância, estando 24 horas dispostos."/>
                        <CardFirst image={WifiIcon} title="Roteadores com Wifi 6 e 7" description="Utilizamos como padrão roteadores da Huawei, contendo suporte a versão mais recente de Wifi."/>
                        <CardFirst image={AppIcon} title="Aplicativo de gerenciamento" description="Oferecemos aos nossos clientes um aplicativo mobile para gerenciar seus planos e pontos."/>
                    </div>  
                </div>
            </section>


            <section className={styles.works}>
                <div className={styles.worksContent}>
                    <div className={styles.worksTexts}>
                        <Tag>Tudo que você precisa</Tag>
                        <div className={styles.worksTitles}>
                            <span className={`${styles.worksTitle} title2`}>Faça suas atividades <br/> com tranquilidade</span>
                            <span className={`${styles.worksDescription} bodyLarge`}>Trabalhe, estude e jogue com conforto sem se preocupar com problemas de conexão e estabilidade de rede, seus problemas acabaram com a Átria.</span>
                        </div>
                    </div>
                    <div className={styles.worksCards}>
                        <CardSecond image={Grafico} title="Extrema conectividade" description="Nossos planos são essencialmente construidos para proporcionar um ambiente de alta conectividade e velocidade."/>
                        <CardSecond image={Parede} title="Conexão Robusta" description="Todo o nossos sistema é robusto e sólido, testado e aprovado para evitar quedas na rede, assim garantindo confiabilidade."/>
                    </div>
                </div>
            </section>


            <section className={styles.plans}>
                <div className={styles.plansTexts}>
                    <span className={`${styles.plansTitle} title1`}>Planos</span>
                    <div className={styles.plansDescribe}>
                        <span className={` bodyLarge ${styles.plansDescription}`}>Nossos planos são meticulosamente pensados para sanar cada necessidade dos nossos clientes, venha ser Átria.</span>
                        <Tag>Saiba Mais</Tag>
                    </div>
                </div>
                <div className={styles.plansBox}>
                    <div className={styles.plansLines}>
                        <PlanCard/>
                        <PlanCard/>
                        <PlanCard/>
                        <PlanCard/>
                    </div>
                </div>
            </section>

            <section className={styles.logos}>
                <div className={styles.logosContent}>
                    <span className={`${styles.logosDescription} bodySmall`} > Disponibilizamos diversos streamings 
                    para nossos assinantes.</span>
                    <div className={styles.logosCollection}>
                        <img src={globo} alt="Globo" className={styles.logoimage}/>
                        <img src={premier} alt="Premier" className={styles.logoimage}/>
                        <img src={telecine} alt="Telecine" className={styles.logoimage}/>
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
    )
}