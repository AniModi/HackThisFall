import React from 'react';
import styles from "./Home.module.css"
import Menu from '../../components/navbar/Menu';
import NavBar from './../../components/navbar/NavBar'
import {FaThumbsDown,FaThumbsUp} from 'react-icons/fa'
const obj = [
    {
        name: "Top songs",
        arr:[0,1,2,3,4,5,6,7,8,9,10],
        page:"1"
    }
];
const Home = () => {
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
                        <button className={styles.button}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>
                </div>
                {
                obj.map(e=>
                    <Menu key={e["name"]} page={e["page"]} name={e["name"]} arr={e["arr"]}></Menu>
                )
            }
            </div>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Lunch"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>
                </div>
                {
                obj.map(e=>
                    <Menu key={e["name"]} page={e["page"]} name={e["name"]} arr={e["arr"]}></Menu>
                )
            }
            </div>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Snacks"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>    
                </div>
                {
                obj.map(e=>
                    <Menu key={e["name"]} page={e["page"]} name={e["name"]} arr={e["arr"]}></Menu>
                )
            }
            </div>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {"Dinner"}
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.button}>
                            <FaThumbsUp></FaThumbsUp>
                        </button>
                        <button className={styles.button}>
                            <FaThumbsDown></FaThumbsDown>
                        </button>
                    </div>    
                </div>
                {
                obj.map(e=>
                    <Menu key={e["name"]} page={e["page"]} name={e["name"]} arr={e["arr"]}></Menu>
                )
            }
            </div>
        </div>
        </>
    );
}

export default Home;