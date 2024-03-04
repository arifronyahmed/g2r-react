import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <div className={`${styles.navbar} container`}>
        <div>
          <Link to="/">
            <img src="/G2R-LOGO.png" alt="G2r Logo" className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li>
              <Link to="/qui-sommes-nous">Qui Sommes Nous?</Link>
            </li>
            <li>
              <Link to="/formations">Formations</Link>
            </li>
            <li>
              <Link to="/contactez-nous">Contactez Nous</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
