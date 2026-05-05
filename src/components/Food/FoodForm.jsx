import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Input from "../FormControls/Input";
import Textarea from "../FormControls/Textarea";
import noImage from "../../assets/noImage.png";
import styles from "./FoodForm.module.css";

export default function CreateFoodForm({
  review = { title: "", imgUrl: "", calorie: "", content: "" },
  onSubmit,
}) {
  const inputRef = useRef(null);
  const handleSubmit = (formData) => {
    // const title = formData.get("title");
    // const calorie = formData.get("calorie");
    // const content = formData.get("content");
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} action={handleSubmit}>
      <div className={styles.inner}>
        <div className={styles.imageContainer}>
          <img
            className={styles.noImage}
            src={review.imgUrl !== "" ? review.imgUrl : noImage}
            alt='등록할 이미지'
          />
        </div>
        <div className={styles.inputs}>
          <Input
            type='name'
            name='title'
            placeholder='이름을 입력하세요.'
            defaultValue={review.title}
            ref={inputRef}
          />
          <Input
            type='number'
            name='calorie'
            placeholder='KCal'
            defaultValue={review.calorie}
          />
          <Textarea
            type='name'
            name='content'
            placeholder='설명을 입력하세요.'
            defaultValue={review.content}
          />
        </div>
      </div>
      <Button>작성</Button>
    </form>
  );
}
