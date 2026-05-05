import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import closeImage from "../../assets/ic_close.svg";

export default function Modal({ title = "", isOpen, onClose, children }) {
  if (!isOpen) return;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children}
        <button type='button' onClick={onClose}>
          <img
            className={styles.closeBtn}
            src={closeImage}
            alt='모달 닫기 버튼'
          />
        </button>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
