import React, { useState } from 'react';
import styles from "./NavBar.module.css"
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom';
import logo from "./logo.svg"
import { useAuth } from '../contexts/AuthContext';
const NavBar = () => {
    const [hamburgerActive,setHamburgerActive] = useState(false);
    const [profileActive,setProfileActive] = useState(false);
    const {currentUser,signout} = useAuth();
    const handleSignOut = ()=>{
        signout();
    }
    const setActive = ()=>{
        setHamburgerActive(prev=>!prev)
    }
    const setActiveP = ()=>{
        setProfileActive(prev=>!prev)
    }
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"></img>
            </div>
            <div className={styles.other}>
                <Link className={styles.link} to="/Home">{"Menu"}</Link>
                <Link className={styles.link} to="/Grievances">{"Grievances"}</Link>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileBtn}>
                    <div className={styles.circle} onClick={setActiveP}>
                    <img src={logo} alt="profile" className={styles.profileImg}></img>
                    </div>
                    <div className={`${styles.dropDown} ${profileActive===true?"":styles.hide}`}>
                        {currentUser===null?<div><Link to={"/login"}>Login</Link></div>:""}
                        {currentUser===null?<div><Link to={"/register"}>Sign Up</Link></div>:""}
                        {currentUser!==null?<div><Link to={"/profile"}>{"Profile"}</Link></div>:""}
                        {currentUser!==null?<div onClick={handleSignOut}><Link className={styles.link} to={"/login"}>{"Sign Out"}</Link></div>:""}
                    </div>
                </div>
            </div>
            <div className={styles.hamburger}>
                <FaBars size={40} onClick={setActive}></FaBars>
                <div className={`${styles.hOther} ${hamburgerActive===true?styles.hOtherActive:""}`}>
                        <Link className={styles.link} to="/Home">{"Menu"}</Link>
                        <Link className={styles.link} to="/Grievances">{"Grievances"}</Link>
                        {currentUser===null?<div><Link className={styles.link} to={"/login"}>Login</Link></div>:""}
                        {currentUser===null?<div><Link className={styles.link} to={"/register"}>Sign Up</Link></div>:""}
                        {currentUser!==null?<div><Link className={styles.link} to={"/profile"}>{"Profile"}</Link></div>:""}
                        {currentUser!==null?<div onClick={handleSignOut}><Link className={styles.link} to={"/login"}>{"Sign Out"}</Link></div>:""}
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;