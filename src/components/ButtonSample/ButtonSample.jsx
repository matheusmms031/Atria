import styles from "./ButtonSample.module.scss"


function ButtonSample({children, ...props}){
    return(
        <div className={styles.buttonsample}  {...props}>
            <span className="bodyBold">{children}</span>
        </div>
    );
};



export default ButtonSample;