import styles from "./Select.module.css";

export default function Select({ className = "", children, ...props }) {
  const classNames = `${styles.select} ${className}`;

  return (
    <select className={classNames} {...props}>
      {children}
    </select>
  );
}
