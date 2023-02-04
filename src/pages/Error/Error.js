import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Error.module.css"


const Error = () => {
    return (
        <div className={styles.body}>
        <div class={styles.container}>
        <h2 className={styles.h2}>404</h2>
        <h3 className={styles.h3}>Oops, nothing here...</h3>
        <p className={styles.p}>Please Check the URL</p>
        <p className={styles.p}>Otherwise, <Link to="/" className={styles.a}>Click here</Link> to redirect to homepage.</p>
    </div>
        </div>
    );
}

export default Error;