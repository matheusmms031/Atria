import logo from "../../assets/logoup.png"
import styles from "./Footer.module.scss"
import Instagram from "../../assets/Icons/Property 1=Instagram.svg"
import X from "../../assets/Icons/Property 1=X.svg"
import Youtube from "../../assets/Icons/Property 1=Youtube.svg"
import Link from "../../assets/Icons/Property 1=LinkedIn.svg"
import Martelo from "../../assets/martelo.png"
import Alvo from "../../assets/alvorodape.png"
import User from "../../assets/Icons/avatar.svg"
import Pin from "../../assets/pin.png"
import PhoneIcon from "../../assets/phone-call.png"

export default function Footer(){
    var table = [
        {"title":"Sobre nós", 
            "content":[
                {"link":"/sobre#valores", "span":"Nossos valores"},
                {"link":"/#diferenciais", "span":"Os diferenciais"},
                {"link":"/sobre#familia", "span":"Somos uma família"}]},

        {"title": "Planos", 
            "content":[
                {"link":"/planos#turbo", "span":"Turbo"}, 
                {"link":"/planos#ultra", "span":"Ultra"},
                {"link":"/planos#premium", "span":"Premium"},
                {"link":"/planos#master", "span":"Master"}]},
        {"title": "Contato", 
            "content":[
                {"link":"/contato", "span":"Entre em contato"},
                {"link":"/trabalhe-conosco", "span":"Trabalhe conosco"},
                {"link":"https://www.instagram.com/atriadigitalbr/", "span":"Instagram"},]}
    ]
    
    return(
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.firstBox}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                </div>
                <div className={styles.secondBox}>
                    <div className={styles.boxLinks}>
                        <div className={styles.linkBox}>
                            <img src={Martelo} className={styles.socialIcon}/>
                            <span className={styles.linkSecond}>
                                CÓDIGO DE CONDUTA
                            </span>
                        </div>
                        <div className={styles.linkBox}>
                            <img src={Alvo} className={styles.socialIcon}/>
                            <span className={styles.linkSecond}>
                                PROPÓSITO
                            </span>
                        </div>
                        <div className={styles.linkBox}>
                            <img src={User} className={styles.socialIcon}/>
                            <span className={styles.linkSecond}>
                                TRABALHE CONOSCO
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.secondBox}>
                    <div className={styles.socialMedia}>
                        <a href="https://www.instagram.com/atriadigitalbr/">
                            <img src={Instagram} alt="Instagram" className={styles.socialIcon}/>
                        </a>
                        <a>
                            <img src={X} alt="Instagram" className={styles.socialIcon}/>
                        </a>
                        <a>
                            <img src={Link} alt="Instagram" className={styles.socialIcon}/>
                        </a>
                        <a>
                            <img src={Youtube} alt="Instagram" className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
            </div>
            <span className={styles.desc2}>
                <div>
                    <img src={Pin} alt="Instagram" className={styles.pin}/>
                    <span>
                        Av. Luiz Paulo Franco, 603 - Sala 603 - Belvedere - Belo Horizonte - MG
                    </span>
                </div>
                <div className={styles.leftBox}>
                    <img src={PhoneIcon} alt="Instagram" className={styles.pin}/>
                    <span>
                        (31) 2333-1401
                    </span>
                </div>
            </span>
            <span className={styles.mobile}>
                @ 2024 Átria Digital. Todos os direitos reservados
            </span>
        </div>
    )
}
