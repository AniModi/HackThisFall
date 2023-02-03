import React, { useState } from 'react';
import styles from "./NavBar.module.css"
import {FaBars} from "react-icons/fa"
import logo from "./logo.svg"
const NavBar = () => {
    const [hamburgerActive,setHamburgerActive] = useState(false);
    const setActive = ()=>{
        setHamburgerActive(prev=>!prev)
    }
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"></img>
            </div>
            <div className={styles.other}>
                <div className={styles.link}>{"Menu"}</div>
                <div className={styles.link}>{"Grievances"}</div>
                <div className={styles.profile}>
                    <img src={logo} alt="profile" className={styles.img}></img>
                </div>
            </div>
            <div className={styles.hamburger}>
                <FaBars size={40} onClick={setActive}></FaBars>
                <div className={`${styles.hOther} ${hamburgerActive===true?styles.hOtherActive:""}`}>
                    <div className={styles.link}>{"Menu"}</div>
                    <div className={styles.link}>{"Grievances"}</div>
                    <div className={styles.profile}>
                        <img src={logo} alt="profile" className={styles.img}></img>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;