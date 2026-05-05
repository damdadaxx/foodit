import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <main className={styles.layout}>
      <div className={styles.inner}>
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
