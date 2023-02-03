import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import food from "../../img/food.jpg"

const Card = (props) => {
  const [img,setImg] = useState("");
  // useEffect(() => {
  //   console.log(request('www.themealdb.com/api/json/v1/1/search.php?s=dal'))
  // }, []);
  // const handlePlaySong = (event) => {
  //   props.onPlay(event.currentTarget)
  // }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
            <img src={food} alt="img" className={styles.img}></img>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            {"Dal Makhani"}
          </div>
          <div className={styles.type}>
            {"Veg"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
