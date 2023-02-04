import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Profile.module.css'


const Profile = ()=>{
    const {currentUser} = useAuth();
    const history = useNavigate();
    useEffect(()=>{
        if(currentUser==null){
            history("/error");
        }
        console.log(currentUser);
    },[history,currentUser]);
    return (
        <>
        <NavBar></NavBar>
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Your Profile</h1>
                <h2>My Details</h2>
            </div>
            <div className={styles.name}>
                <div className={styles.img}>ll</div>
                <div className={styles.profile}>
                    <h1>{currentUser!==null && currentUser.displayName}</h1>
                    <h2>{currentUser!==null && currentUser.email}</h2>
                </div>
            </div>
            <div className={styles.account}>
                <div className={styles.table}>
                    <div className={styles.row}>l</div>
                    <div className={styles.row}>l</div>
                    <div className={styles.row}>l</div>
                    <div className={styles.row}>l</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;