import React from "react";
import Card from "./Card";
import styles from "./Menu.module.css";


const Menu = (props) => {
  return (
    <>
        <div className={styles.container}>
        {
              props.arr.map((e) => (
                <Card key={e} index={e} page={props.page}></Card>
              ))
        }
        </div>
    </>
  );
};

export default Menu;
