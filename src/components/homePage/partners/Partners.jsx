import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <div className="container">
      <div className={styles.title}>Nos partenaires</div>
      <div className={styles.logo_box}>
        <img
          src="/France-travail-2023.svg.png"
          alt="logo of france travail"
          className={styles.logo}
        />

        <img
          src="/Ville_de_Paris_logo_2019.svg.png"
          alt="logo of france travail"
          className={styles.logo}
        />

        <img
          src="/20211228035137!RATP.svg"
          alt="logo of france travail"
          className={styles.logo}
        />
        <img
          src="/Dev_logo_rgb.png"
          alt="logo of france travail"
          className={styles.logo}
        />
      </div>
    </div>
  );
}
