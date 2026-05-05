import React, { useEffect, useRef, useState } from "react";
import styles from "./FileInput.module.css";
import noImage from "../../assets/noImage.png";
import CloseImage from "../../assets/ic_close.svg";

export default function FileInput({
  className,
  name,
  initialPreview,
  imageAlt,
}) {
  const inputRef = useRef();

  const [file, setFile] = useState();
  const [preview, setPreview] = useState(initialPreview);

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleClear = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview(initialPreview);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <div className={`${styles.container} ${className}`}>
      <input
        name={name}
        type='file'
        onChange={handleChange}
        ref={inputRef}
        hidden
      />
      <img
        className={styles.preview}
        src={preview || noImage}
        alt={imageAlt}
        onClick={handleClick}
      />
      {file && (
        <div className={styles.clear} onClick={handleClear}>
          <img src={CloseImage} alt='clear' />
        </div>
      )}
    </div>
  );
}
