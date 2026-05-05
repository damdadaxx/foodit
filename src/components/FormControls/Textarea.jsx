import React from "react";
import styles from "./Textarea.module.css";

export default function Textarea({ className = "", ...props }) {
  const classNames = `${styles.textarea} ${className}`;

  return <textarea className={classNames} {...props} />;
}
