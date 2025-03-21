import styles from "./PlanCard.module.scss"
import line from "../../assets/line.svg"
import ReactGA from "react-ga4"

var list = [
    {"title":"Keyword optimization"},
    {"title":"Keyword optimization"},
    {"title":"Keyword optimization"},
    {"title":"Keyword optimization"},
    {"title":"Keyword optimization"},
]

export default function PlanCard({title="Pro",price="$79/mo",velocity="500 Mb/s",features=list,link="", ...props}){

    const handleClick = () => {
        ReactGA.event("click", {
            event_category: "User",
            event_action: "click",
            event_label: `${title}`
        })
    
        window.open(`https://api.whatsapp.com/send?phone=3123331401&text=Estou interessado pelo plano ${title}`,"_blank")};


    return(
        <div className={styles.planCard} {...props}>
            <div className={styles.titles}>
                <div className={styles.titleBox}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.price}>{price}</span> 
                </div>
            </div>
            <div className={styles.imageDiv}>
                <div>

                </div>
            </div>
            <div className={styles.principalBox}>
                <div className={styles.features}>
                    
                    {

                    features.map((feature, index) => ( 
                        <div key={index} className={styles.feature}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3979 5.27299L6.39795 11.273C6.34569 11.3254 6.28359 11.367 6.21522 11.3954C6.14685 11.4238 6.07354 11.4384 5.99951 11.4384C5.92548 11.4384 5.85217 11.4238 5.7838 11.3954C5.71543 11.367 5.65333 11.3254 5.60107 11.273L2.97607 8.64799C2.92375 8.59566 2.88224 8.53355 2.85393 8.46518C2.82561 8.39682 2.81104 8.32355 2.81104 8.24955C2.81104 8.17555 2.82561 8.10228 2.85393 8.03392C2.88224 7.96555 2.92375 7.90344 2.97607 7.85111C3.0284 7.79879 3.09051 7.75728 3.15888 7.72897C3.22724 7.70065 3.30051 7.68607 3.37451 7.68607C3.44851 7.68607 3.52178 7.70065 3.59014 7.72897C3.65851 7.75728 3.72062 7.79879 3.77295 7.85111L5.99998 10.0781L11.602 4.47705C11.7077 4.37138 11.851 4.31201 12.0004 4.31201C12.1499 4.31201 12.2932 4.37138 12.3989 4.47705C12.5046 4.58272 12.5639 4.72604 12.5639 4.87549C12.5639 5.02493 12.5046 5.16825 12.3989 5.27393L12.3979 5.27299Z" fill="black"/>
                            </svg>
                            <span>{feature.title}</span>
                        </div>
                    ))
                    
                    }
                </div>
                <div className={styles.button} onClick={handleClick}>
                    <span className="bodyMedium">Assine já</span>
                </div>
            </div>
        </div>
    )
}