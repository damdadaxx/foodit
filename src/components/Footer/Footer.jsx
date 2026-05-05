import styles from "./Footer.module.css";
import footerLogoImage from "../../assets/footerLogo.svg";
import LocaleSelect from "../LocaleSelect/LocaleSelect";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img
          className={styles.logoImage}
          src={footerLogoImage}
          alt='Foodit 텍스트 로고 이미지'
        />
        <p className={styles.privacy}>서비스 이용약관 | 개인정보 처리방침</p>
        <LocaleSelect />
      </div>
    </footer>
  );
}
