import React from "react";
import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  className = "",
  children,
  active = false,
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant],
    active ? styles.active : "",
    className,
  ].join(" ");

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
