import styles from "./Nav.module.scss"
import image from "../../assets/logo_linear.png"
import { NavLink } from "react-router"
import Menu from "../../assets/Icons/Icons=Menu.svg"
import { useState, useRef, } from "react";
import X from "../../assets/Icons/x.png"
import gsap from "gsap";



export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const listNav = useRef(null);

    const handleClick = () => {

        if (showMenu) {
            gsap.to(listNav.current, {opacity: 0, duration: 0.5, display: "none",backgroundColor: "#000000", ease: "power1.out"  });
        } else {
            gsap.fromTo(listNav.current, { opacity:0, y: "-100%",display:"none"}, { opacity:1, y: 0, display: "flex", duration: 0.5, ease: "power1.in" }  );
        }

        setShowMenu(!showMenu);
    }

    return (
        <div className={styles.boxnav}>
            <div className={styles.box}>

                <img src={image} className={styles.img} />
                <div className={styles.items}>
                    <span className="bodyMedium">
                        <NavLink to="/" preventScrollReset className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                                Home
                        </NavLink>
                    </span>
                    <span className="bodyMedium">
                        <NavLink to="/sobre" preventScrollReset className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                            Sobre
                        </NavLink>
                    </span>
                    <span className="bodyMedium">
                        <NavLink to="/planos" className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                                Planos
                        </NavLink>
                    </span>
                        <span className="bodyMedium">
                            <NavLink to="/contato" preventScrollReset className={({ isActive }) =>
                                isActive ? "selected" : "none"}>
                                    Contato
                            </NavLink>
                        </span>
                </div>

                <div className={styles.button} onClick={handleClick}>   
                    {showMenu? <img src={X} className={styles.menuIconX} /> : <img src={Menu} className={styles.menuIcon} />  }
                </div>


            </div>

                <div className={styles.menuNav} ref={listNav}>
                    <span className="bodyLarge">
                        <NavLink to="/" preventScrollReset className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                                Home
                        </NavLink>
                    </span>
                    <span className="bodyLarge">
                        <NavLink to="/sobre" preventScrollReset className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                                Sobre
                        </NavLink>
                    </span>
                    <span className="bodyLarge">
                        <NavLink to="/planos" preventScrollReset className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                                Planos
                        </NavLink>
                    </span>
                    <span className="bodyLarge">
                        <NavLink to="/contato" preventScrollReset className={({ isActive }) =>
                            isActive ? "selected" : "none"}>
                                Contato
                        </NavLink>
                    </span>
                </div>
            
        </div>
    )
}