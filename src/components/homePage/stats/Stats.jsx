import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stat}>
      <div className="container grid grid-column--2">
        {/* image box */}
        <div>
          <img
            src="/undraw_winners_re_wr1l.svg"
            alt="illustration of two people winning"
            className={styles.img}
          />
        </div>

        {/* stats box */}
        <div>
          <div className={styles.title}>Notre Réalisation</div>
          <div className="grid grid-column--2 grid-row--gap">
            <div className={styles.stat_box}>
              <div className={styles.number}>2956</div>
              <p className={styles.text}>
                femmes & hommes accompagnés depuis 2012
              </p>
            </div>
            <div className={styles.stat_box}>
              <div className={styles.number}>98.5%</div>
              <p className={styles.text}>
                Moyenne taux de satisfaction CPF et Google Avis
              </p>
            </div>
            <div className={styles.stat_box}>
              <div className={styles.number}>10</div>
              <p className={styles.text}>
                sites à Paris et en région parisienne
              </p>
            </div>
            <div className={styles.stat_box}>
              <div className={styles.number}>100%</div>
              <p className={styles.text}>
                de réalisation des entretiens à 6 mois
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
