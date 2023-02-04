import React from "react";
import styles from "./Card.module.css";
import food from "./food.json"

const Card = (props) => {
  // const [img,setImg] = useState("");
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
            <img src={food[props.type][props.index]['image_link']} alt="img" className={styles.img}></img>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            {food[props.type][props.index]['name']}
          </div>
          <div className={styles.type}>
            {props.type}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
