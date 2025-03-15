import styles from "./Contato.module.scss"
import { useState } from "react"
import ButtonSample from "../../components/ButtonSample/ButtonSample.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx"

import WhatssapIcon from "../../assets/Icons/Icons=Whatsapp.svg"
import InstagramIcon from "../../assets/Icons/InstagramB.svg"
import MetaPixel from "../../components/MetaPixel/MetaPixel.jsx"
import { Helmet } from "react-helmet-async"

export default function Contato(){
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")


    return(
        <>
        <Helmet>
            <title>Contato - Átria Digital</title>
        </Helmet>
        <MetaPixel/>
        <div className="stack">
            <ScrollToTop />
            <div className={styles.Contact}>
                <div className={styles.Content}>
                    <div className={styles.Titles}>
                        <span className={styles.title}>Entre em contato</span>
                        <span className={styles.description}>Entre em contato conosco e solicite mais informações sobre nossos planos e benefícios.</span>
                    </div>
                    <div className={styles.Boxes}>
                        <div className={styles.box}>
                            <span className={styles.name}>Nome</span>
                            <input type="text" placeholder="Nome" onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className={styles.box}>
                            <span className={styles.name}>Mensagem</span>
                            <textarea type="text" placeholder="Mensagem" onChange={event => setMessage(event.target.value)}/>
                        </div>
                        <ButtonSample style={{alignSelf:"stretch"}} onClick={() => {
                            window.open(`https://api.whatsapp.com/send?phone=3123331401&text=${encodeURIComponent(`Nome: ${name} \n Mensagem: ${message} Enviado automaticamente pelo site da Átria Digital.`)}`, "_blank")
                        }}>Enviar</ButtonSample>
                    </div>
                    <div className={styles.social}>
                        <img src={WhatssapIcon} alt="Whatsapp" className={styles.socialIcon} onClick={() => {window.open("https://api.whatsapp.com/send?phone=3123331401","_blank")}}/>
                        <img src={InstagramIcon} alt="Whatsapp" className={styles.socialIcon} onClick={() => {window.open("https://www.instagram.com/atriadigitalbr/","_blank")}}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
        </>
    )
}