import Nav from "../../components/Nav/Nav"
import styles from "./Home.module.scss"
import video from "../../assets/fundo.mp4"
import ButtonSample from "../../components/ButtonSample/ButtonSample.jsx"
import globo from "../../assets/globo.png"
import premier from "../../assets/premier.png"
import telecine from "../../assets/telecine.png"

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
        </div>
    )
}