import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Input from "../FormControls/Input";
import Textarea from "../FormControls/Textarea";
import styles from "./FoodForm.module.css";
import useTranslate from "../../hooks/useTranslate";
import FileInput from "../FormControls/FileInput";

export default function CreateFoodForm({
  review = { title: "", imgUrl: "", calorie: "", content: "" },
  onSubmit,
}) {
  const t = useTranslate();

  const inputRef = useRef(null);

  // const handleSubmit = (formData) => {
  //   // const title = formData.get("title");
  //   // const calorie = formData.get("calorie");
  //   // const content = formData.get("content");
  //   const data = Object.fromEntries(formData.entries());
  //   onSubmit(data);
  // };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} action={onSubmit}>
      <div className={styles.inner}>
        <div className={styles.imageContainer}>
          <FileInput
            name='imgFile'
            initialPreview={review.imgUrl}
            imageAlt={t("food image")}
          />
        </div>
        <div className={styles.inputs}>
          <Input
            type='name'
            name='title'
            placeholder={t("enter the title")}
            defaultValue={review.title}
            ref={inputRef}
          />
          <Input
            type='number'
            name='calorie'
            placeholder={t("enter the calorie")}
            defaultValue={review.calorie}
          />
          <Textarea
            type='name'
            name='content'
            placeholder={t("enter the content")}
            defaultValue={review.content}
          />
        </div>
      </div>
      <Button>{t("submit button")}</Button>
    </form>
  );
}
