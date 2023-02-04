import React from 'react';
import styles from "./Home.module.css"
import Menu from '../../components/Menu';
import 'react-toastify/dist/ReactToastify.min.css'
import NavBar from './../../components/NavBar'
import {FaThumbsDown,FaThumbsUp} from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
const arr = [0,1,2,3,4,5,6];
const Home = () => {
    const {currentUser} = useAuth();
    const handleToastIn = ()=>{
        if(currentUser===null){
            toast('Please log in!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        toast('Opted In successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const handleToastOut = ()=>{
        if(currentUser===null){
            toast('Please log in!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        toast('Opted out successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    return(
        <>
        <NavBar></NavBar>
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Breakfast"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button} onClick={handleToastIn}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button} onClick={handleToastOut}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>
                    <ToastContainer bodyClassName={styles.toast}/>
                </div>
                {
                    <Menu key={arr} ind={'breakfast'} arr={arr}></Menu>
            }
            </div>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Lunch"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button} onClick={handleToastIn}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button} onClick={handleToastOut}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>
                </div>
                {
                    <Menu key={arr} ind={'lunch'} arr={arr}></Menu>

            }
            </div>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Snacks"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button} onClick={handleToastIn}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button} onClick={handleToastOut}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>    
                </div>
                {
                <Menu key={arr} ind={'snacks'} arr={arr}></Menu>

            }
            </div>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Dinner"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button} onClick={handleToastIn}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button} onClick={handleToastIn}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>    
                </div>
                {
                    <Menu key={arr} ind={'dinner'} arr={arr}></Menu>
            }
            </div>
        </div>
        </>
    );
}

export default Home;