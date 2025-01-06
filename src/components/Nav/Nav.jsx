import styles from "./Nav.module.scss"
import image from "../../assets/logo_linear.png"
import { NavLink } from "react-router"

export default function Nav() {
    return (
        <div className={styles.box}>
            <img src={image} className={styles.img} />
            <div className={styles.items}>
                <span className="bodyMedium">
                    <NavLink to="/#" preventScrollReset className={({ isActive }) =>
                        isActive ? "selected" : "none"}>
                            Home
                    </NavLink>
                </span>
                <span className="bodyMedium">
                    <NavLink to="/sobre#" preventScrollReset className={({ isActive }) =>
                        isActive ? "selected" : "none"}>
                        Sobre
                    </NavLink>
                </span>
                <span className="bodyMedium">
                    <NavLink to="/planos#" preventScrollReset className={({ isActive }) =>
                        isActive ? "selected" : "none"}>
                            Planos
                    </NavLink>
                </span>
                <span className="bodyMedium">Contato</span>
            </div>

        </div>
    )
}