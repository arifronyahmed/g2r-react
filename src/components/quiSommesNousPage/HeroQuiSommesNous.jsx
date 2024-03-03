import styles from "./HeroQuiSommesNous.module.css";

export default function HeroQuiSommesNous() {
  return (
    <section className={styles.hero}>
      <div className="container grid grid-column--2 grid-center--v">
        <div className={styles.title}>"Notre équipe, vos ambitions"</div>
        <div>
          <img
            src="/undraw_team_spirit_re_yl1v.svg"
            alt="illustration of 3 people talking"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
