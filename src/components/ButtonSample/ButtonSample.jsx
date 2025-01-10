import styles from "./ButtonSample.module.scss"
import { forwardRef } from "react"


const ButtonSample = forwardRef(({children, ...props}, ref) => {
    return(
        <div className={styles.buttonsample} ref={ref} {...props}>
            <span className="bodyBold">{children}</span>
        </div>
    );
});



export default ButtonSample;