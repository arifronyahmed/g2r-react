import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <div className={`${styles.navbar} container`}>
        <div className={styles.logo}>
          <Link to="/">Logo</Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li>
              <Link to="/contactez-nous">Contactez Nous</Link>
            </li>
            <li>
              <Link to="/qui-sommes-nous">Qui Sommes Nous?</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
