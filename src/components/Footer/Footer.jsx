import logo from "../../assets/logo_linear.png"
import styles from "./Footer.module.scss"


export default function Footer(){
    var table = [
        
    ]
    
    return(
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.firstBox}>
                    <div className={styles.logoDesc}>
                        <img src={logo} alt="Logo" className={styles.logo}/>
                        <span className={styles.desc}>
                            Faça diferente e escolha o melhor para você e sua fámilia, escolha já a Átria Digital.
                        </span>
                    </div>
                </div>
                <div className={styles.secondBox}>
                    {
                        table.map((element, index) => (
                            <div key={index} className={styles.collumns}>
                                <span className={`${styles.title}`}>{element.title}</span>
                                {
                                    element.content.map((content, index) => (
                                        <a href={content.link}>{content.span}</a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <span className={styles.mobile}>
                @ 2024 Átria Digital. Todos os direitos reservados
            </span>
            <span className={styles.mobile}>
            Desenvolvido por Matheus Magalhães
            </span>
        </div>
    )
}