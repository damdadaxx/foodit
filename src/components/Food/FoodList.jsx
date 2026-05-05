import React from "react";
import FoodListItem from "./FoodListItem";
import styles from "./FoodList.module.css";
import Button from "../Button/Button";

export default function FoodList({ items, onUpdate, onDelete }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li className={styles.list} key={item.id}>
            <FoodListItem item={item} onUpdate={onUpdate} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      <Button variant='loadMore'>더보기</Button>
    </>
  );
}
