import Nav from "../../components/Nav/Nav"
import styles from "./Home.module.scss"
import video from "../../assets/fundo.mp4"
import ButtonSample from "../../components/ButtonSample/ButtonSample.jsx"
import globo from "../../assets/globo.png"
import premier from "../../assets/premier.png"
import telecine from "../../assets/telecine.png"
import { CardFirst } from "../../components/CardFirst/CardFirst"
import WhatsappIcon from "../../assets/Icons/Icons=Whatsapp.svg"
import WifiIcon from "../../assets/Icons/Icons=Wifi.svg"
import AppIcon from "../../assets/Icons/Icons=App.svg"


export default function Home(){
    return(
        <div className="stack">
            <Nav/>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.titleFirst}>Olá, Vila da Serra</span>
                    <span className={`${styles.heroDescription} bodyLarge`} >Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</span>
                    <ButtonSample onClick={() => console.log("Clicou no botão")}>Saiba mais</ButtonSample>
                </div>
                <video autoPlay muted loop className={styles.video} src={video}/>
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
            <section className={styles.inovation}>
                <div className={styles.inovationContent}>
                    <div className={styles.inovationTexts}>
                        <span className={`${styles.inovationTitle} title2`}> Viemos para inovar </span>
                        <span className={`${styles.inovationDescription} bodyLarge`}>
                        Estamos trazendo aos bairros mais luxuosos de Belo Horizonte a melhor das experiências de conectividade de toda a região da alta classe.
                        </span>
                    </div>
                    <div className={styles.inovationCards}>
                        <CardFirst image={WhatsappIcon} title="Suporte por Whatsapp" description="Estamos no Whatsapp para solucionar problemas a distância, estando 24 horas dispostos."/>.
                        <CardFirst image={WifiIcon} title="Roteadores com Wifi 6 e 7" description="Utilizamos como padrão roteadores da Huawei, contendo suporte a versão mais recente de Wifi."/>
                        <CardFirst image={AppIcon} title="Aplicativo de gerenciamento" description="Oferecemos aos nossos clientes um aplicativo mobile para gerenciar seus planos e pontos."/>.
                    </div>  
                </div>
            </section>
        </div>
    )
}