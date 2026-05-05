import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
// import EditFoodForm from "./EditFoodForm";
import Button from "../Button/Button";
import styles from "./FoodListItem.module.css";
import { formatDate } from "../../utils/date";
import FoodForm from "./FoodForm";
import LocalContext from "../../contexts/LocaleContext";

export default function FoodListItem({ item, onUpdate, onDelete }) {
  const locale = useContext(LocalContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { id, imgUrl, title, calorie, content, createdAt } = item;
  const date = formatDate(createdAt);

  const handleEditFormSubmit = (data) => {
    onUpdate(item.id, data);
    setIsEditModalOpen(false);
  };

  return (
    <article className={styles.list}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imgUrl} alt={title} />
      </div>
      <div className={styles.contents}>
        <header className={styles.titleGroup}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.calorieBadge}>{`${calorie}KCal`}</p>
        </header>
        <p className={styles.content}>{content}</p>
        <div className={styles.footer}>
          <p className={styles.date}>{date}</p>
          <div className={styles.buttonGroup}>
            <Button variant='secondary' onClick={() => onDelete(id)}>
              삭제
            </Button>
            <Button
              variant='tertiary'
              type='button'
              onClick={() => setIsEditModalOpen(true)}
            >
              수정
            </Button>
            <p>현재 언어: {locale}</p>
          </div>
        </div>
      </div>
      <Modal
        title='칼로리 수정하기'
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <FoodForm review={item} onSubmit={handleEditFormSubmit} />
      </Modal>
    </article>
  );
}
