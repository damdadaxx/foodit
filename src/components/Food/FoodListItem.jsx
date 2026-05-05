import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import styles from "./FoodListItem.module.css";
import { formatDate } from "../../utils/date";
import FoodForm from "./FoodForm";
import useTranslate from "../../hooks/useTranslate";

export default function FoodListItem({ item, onUpdate, onDelete }) {
  const t = useTranslate();
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
              {t("delete button")}
            </Button>
            <Button
              variant='tertiary'
              type='button'
              onClick={() => setIsEditModalOpen(true)}
            >
              {t("edit button")}
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title={t("edit calorie")}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <FoodForm review={item} onSubmit={handleEditFormSubmit} />
      </Modal>
    </article>
  );
}
