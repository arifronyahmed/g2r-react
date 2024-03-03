import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container grid grid-column--2">
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Lécole Tech qui prend soin de votre avenir, où que vous soyez !
          </h1>
        </div>
        <div className={styles.right}>
          <img
            src="/public/undraw_engineering_team_a7n2.svg"
            alt="illustration of 3 people talking"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
