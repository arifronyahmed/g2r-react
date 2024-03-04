import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container grid grid-column--4">
        <div className={styles.logo_box}>
          <img src="/G2R-LOGO.png" alt="logo" className={styles.logo} />
          <div className={styles.icon}>
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
          </div>
          <div className={styles.phone_text}>Pour Nous Appeler</div>
          <div className={styles.phone_number}>
            <FaPhoneAlt />
            <div>01 44 64 85 85</div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </footer>
  );
}
