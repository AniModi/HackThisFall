import React from 'react';
import styles from "./Grievances.module.css"
import NavBar from '../../components/NavBar';
const Grievances = () => {
    return(
        <>
        <NavBar></NavBar>
        <div className={styles.container}>
            <div className={styles.form}>
                <input type={'textarea'}></input>
            </div>
        </div>
        </>
    );
}

export default Grievances;