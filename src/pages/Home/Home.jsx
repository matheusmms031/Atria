import { useRef, useLayoutEffect, useContext } from 'react';
import styles from "./Home.module.scss"
import video from "../../assets/fundo.mp4"
import { CardFirst } from "../../components/CardFirst/CardFirst"


import Grafico from "../../assets/grafico.png"
import Parede from "../../assets/parede.png"


import WhatsappIcon from "../../assets/Icons/Icons=Whatsapp.svg"
import WhatsappIconW from "../../assets/Icons/Icons=Whatsapp.svg"
import HomeW from "../../assets/Icons/Icons=Home.svg"
import HelpW from "../../assets/Icons/Icons=Help.svg"
import TvW from "../../assets/Icons/Icons=Tv.svg"
import WifiIcon from "../../assets/Icons/Icons=Wifi.svg"
import WifiIconW from "../../assets/Icons/Icons=Wifi.svg"
import AppIcon from "../../assets/Icons/Icons=App.svg"
import AppIconW from "../../assets/Icons/Icons=App.svg"
import HuaweiW from "../../assets/Icons/Icons=Huawei.svg"
import RouterW from "../../assets/Icons/Icons=Roteador.svg"

import DeezerImage from "../../assets/deezer.png"
import MaxImage from "../../assets/max.png"
import NopingImage from "../../assets/noping.png"
import NutriImage from "../../assets/nutri.png"
import PlaykidsImage from "../../assets/playkids.png"
import SkyImage from "../../assets/sky.png"
import ZenImage from "../../assets/zen.png"
import DocwayImage from "../../assets/docway.png"
import MetaPixel from '../../components/MetaPixel/MetaPixel.jsx';

import Tag from "../../components/Tag/Tag.jsx"
import CardSecond from "../../components/CardSecond/CardSecond.jsx"
import FeatureBox from "../../components/FeatureBox/FeatureBox"
import Footer from "../../components/Footer/Footer.jsx"
import PlanCard from "../../components/PlanCard/PlanCard.jsx"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx"

import { Helmet } from 'react-helmet-async';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

export default function Home(){

    const TitleRef = useRef(null)
    const TagRef = useRef(null)
    const DescRef = useRef(null)
    const ButtonRef = useRef(null)

    const logosRef = useRef(null);

        useLayoutEffect(() => {
            const logosElement = logosRef.current;

            gsap.fromTo(TagRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out",});
            gsap.fromTo(TitleRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out",delay: 0.20});
            gsap.fromTo(DescRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out" , delay: 0.40});
            gsap.fromTo(ButtonRef.current, {opacity:0, x: 200}, {opacity:1, x: 0, duration: 1, ease: "power3.out" , delay: 0.60});

            gsap.utils.toArray(".fade-in").forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 100 }, // Estado inicial
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger:element, // Elemento que dispara o ScrollTrigger
                    start: "top 90%", // Quando a parte superior do gatilho atinge 80% da altura da viewport
                    end: "50% 60%", // Fim da animação
                    scrub:true,
                  },
                }
              );});
        const logosWidth = logosElement.scrollWidth;
        const containerWidth = logosElement.offsetWidth;
        console.log({ logosWidth, containerWidth });

        gsap.to(logosElement, {
        x: `-2500px`,
        duration: 40,
        ease: "linear",
        repeat: -1,
    });
}, []);



    return(
        <>
        <Helmet>
            <title>Home - Átria Digital</title>
        </Helmet>
        <MetaPixel />
        <div className="stack">
            <ScrollToTop />
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.titleFirst} ref={TitleRef}>Internet de verdade <br/><span>como você nunca viu.</span></span>
                    <span className={`${styles.heroDescription} bodyLarge`} ref={DescRef} >Tecnologia de última geração e atendimento de alto
                    padrão. <br/> Seja premium com a Atria Digital.</span>
                </div>
                <video autoPlay muted loop className={styles.video} src={video}/>
            </section>

            <section className={styles.features} id='diferenciais'>
                <div className={`${styles.featuresContent} fade-in`}>
                    <span className={`${styles.featuresTitle} title2`}>Veja nossos diferenciais</span>
                    <div className={styles.featuresBoxesLines}>
                        <div className={styles.featuresBoxesCollumns}>
                            <FeatureBox image={WhatsappIconW} title="Rápida velocidade" description="Velocidade rápida de navegação garantida pela alta banda larga."/>
                            <FeatureBox image={AppIconW} title="Aplicativo próprio" description="Disponibilidade de acessar seu plano atráves do aplicativo."/>
                            <FeatureBox image={WifiIconW} title="Planos com Wifi-7" description="Wifi-7 é a versão mais recente e consolidada para um alto desempenho."/>
                        </div>
                        <div className={styles.featuresBoxesCollumns}>
                            <FeatureBox image={HelpW} title="Suporte 24 horas" description="Nossa equipe está pronta para atender você a qualquer dia."/>
                            <FeatureBox image={HomeW} title="Atendimento à domícilio" description="Atendimento diretamente no local feito por técnico especializado."/>
                            <FeatureBox image={TvW} title="Tv, Streaming e Apps" description="Crie seus combos de acordo com as suas necessidades."/>
                        </div>
                        <div className={styles.featuresBoxesCollumns}>
                            <FeatureBox image={HelpW} title="Rapidez no atendimento" description="Estamos prontos para te atender no tempo que você precisar."/>
                            <FeatureBox image={HuaweiW} title="Equipamentos de ponta" description="Trabalhamos com equipamentos de última geração com a melhor tecnologia do mercado."/>
                            <FeatureBox image={RouterW} title="Integração total" description="Tenha internet aonde você precisa!"/>
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.inovation}>
                <div className={`${styles.inovationContent} fade-in`}>
                    <div className={styles.inovationTexts}>
                        <span className={`${styles.inovationTitle} title2`}> Viemos para inovar </span>
                        <span className={`${styles.inovationDescription} bodyLarge`}>
                        Estamos nos bairros Belvedere e Vila da Serra.<br/>
                        Chegamos com a melhor experiência de conectividade da região.
                        </span>
                    </div>
                    <div className={styles.inovationCards}>
                        <CardFirst image={WhatsappIcon} title="Suporte por Whatsapp" description="Estamos no Whatsapp para solucionar problemas a distância, estando 24 horas disponíveis."/>
                        <CardFirst image={WifiIcon} title="Roteadores com Wifi 6 e 7" description="Utilizamos como padrão roteadores da mais alta tecnologia, sempre priorizando a versão mais recente do Wi-Fi."/>
                        <CardFirst image={AppIcon} title="Aplicativo de gerenciamento" description="Oferecemos aos nossos clientes um aplicativo mobile para gerenciar seus planos."/>
                    </div>  
                </div>
            </section>


            <section className={styles.works}>
                <div className={styles.worksContent}>
                    <div className={`${styles.worksTexts} fade-in`}>
                        <Tag>Tudo que você precisa</Tag>
                        <div className={styles.worksTitles}>
                            <span className={`${styles.worksTitle} title2`}>Faça suas atividades <br/> com tranquilidade</span>
                            <span className={`${styles.worksDescription} bodyLarge`}>Trabalhe, estude e jogue com conforto sem se preocupar com problemas de conexão e estabilidade de rede, seus problemas acabaram com a Átria.</span>
                        </div>
                    </div>
                    <div className={`${styles.worksCards} fade-in`}>
                        <CardSecond image={Grafico} title="Extrema conectividade" description="Nossos planos são essencialmente construidos para proporcionar um ambiente de alta conectividade e velocidade."/>
                        <CardSecond image={Parede} title="Conexão Robusta" description="Todo o nossos sistema é robusto e sólido, testado e aprovado para evitar quedas na rede, assim garantindo confiabilidade."/>
                    </div>
                </div>
            </section>


            <section className={styles.plans}>
                <div className={`${styles.plansTexts}`}>
                    <span className={`${styles.plansTitle} title1`}>Planos</span>
                    <div className={styles.plansDescribe}>
                        <span className={` bodyLarge ${styles.plansDescription}`}>Nossos planos são meticulosamente pensados para sanar cada necessidade dos nossos clientes, venha ser Átria.</span>
                        <Tag>Saiba Mais</Tag>
                    </div>
                </div>
                <div className={styles.plansBox}>
                    <div className={styles.plansLines}>
                        <PlanCard 
                            title="Turbo"
                            price="600 Mbp/s"
                            features={[
                                {"title":"Wifi-6"},
                                {"title":"Atendimento 24 horas"},
                            ]}  
                        />
                        <PlanCard
                            title="Ultra"
                            price="800 Mbp/s"
                            features={[
                                {"title":"1 Ponto adicional"},
                                {"title":"Wifi-6"},
                                {"title":"Atendimento 24 horas"},
                            ]}  
                        />
                        <PlanCard
                            title="Premium"
                            price="1 Gbp/s"
                            features={[
                                {"title":"1 Ponto adicional"},
                                {"title":"NAT aberto"},
                                {"title":"IP fixo"},
                                {"title":"Atendimento prioritário"},
                                {"title":"SLA até 6 horas"},
                                {"title":"NoPing"},
                                {"title":"Wifi-6"},
                                {"title":"Atendimento 24 horas"},
                            ]}
                        />
                        <PlanCard
                            title="Master"
                            price="2 Gbp/s"
                            features={[
                                {"title":"2 Pontos adicionais"},
                                {"title":"NAT aberto"},
                                {"title":"IP fixo"},
                                {"title":"Atendimento prioritário"},
                                {"title":"SLA até 4 horas"},
                                {"title":"Wifi-7"},
                                {"title":"Atendimento 24 horas"},
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.logos}>
                <div className={styles.logosContent}>
                    <span className={`${styles.logosDescription} bodySmall`} > Disponibilizamos diversos streamings 
                    para nossos assinantes.</span>
                    <div className={styles.logosCollection} ref={logosRef}>
                        <img src={DeezerImage} alt="Globo" className={styles.logoimage} />
                        <img src={MaxImage} alt="Globo" className={styles.logoimage} />
                        <img src={NopingImage} alt="Globo" className={styles.logoimage} />
                        <img src={NutriImage} alt="Globo" className={styles.logoimage} />
                        <img src={SkyImage} alt="Globo" className={styles.logoimage} />
                        <img src={ZenImage} alt="Globo" className={styles.logoimage} />
                        <img src={PlaykidsImage} alt="Globo" className={styles.logoimage} />
                        <img src={DocwayImage} alt="Globo" className={styles.logoimage} />
                        <img src={DeezerImage} alt="Globo" className={styles.logoimage} />
                        <img src={MaxImage} alt="Globo" className={styles.logoimage} />
                        <img src={NopingImage} alt="Globo" className={styles.logoimage} />
                        <img src={NutriImage} alt="Globo" className={styles.logoimage} />
                        <img src={SkyImage} alt="Globo" className={styles.logoimage} />
                        <img src={ZenImage} alt="Globo" className={styles.logoimage} />
                        <img src={PlaykidsImage} alt="Globo" className={styles.logoimage} />
                        <img src={DocwayImage} alt="Globo" className={styles.logoimage} />
                        <img src={DeezerImage} alt="Globo" className={styles.logoimage} />
                        <img src={MaxImage} alt="Globo" className={styles.logoimage} />
                        <img src={NopingImage} alt="Globo" className={styles.logoimage} />
                        <img src={NutriImage} alt="Globo" className={styles.logoimage} />
                        <img src={SkyImage} alt="Globo" className={styles.logoimage} />
                        <img src={ZenImage} alt="Globo" className={styles.logoimage} />
                        <img src={PlaykidsImage} alt="Globo" className={styles.logoimage} />
                        <img src={DocwayImage} alt="Globo" className={styles.logoimage} />
                        <img src={DeezerImage} alt="Globo" className={styles.logoimage} />
                        <img src={MaxImage} alt="Globo" className={styles.logoimage} />
                        <img src={NopingImage} alt="Globo" className={styles.logoimage} />
                        <img src={NutriImage} alt="Globo" className={styles.logoimage} />
                        <img src={SkyImage} alt="Globo" className={styles.logoimage} />
                        <img src={ZenImage} alt="Globo" className={styles.logoimage} />
                        <img src={PlaykidsImage} alt="Globo" className={styles.logoimage} />
                        <img src={DocwayImage} alt="Globo" className={styles.logoimage} />
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
        </>
    )
}