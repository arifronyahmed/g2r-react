import styles from "./FormationHero.module.css";

export default function FormationHero() {
  return (
    <div className={styles.formation_hero}>
      <div className="container">
        <div className={styles.title_box}>
          <div className={styles.title}>Nos formations</div>
          <div className={styles.subtitle}>
            Trouvez ici un cours adapté à l'emploi de vos rêves
          </div>
        </div>

        <section>
          <div className={styles.formation_box}>
            <div className={styles.formation_title}>
              Nos formations diplômantes / certifiantes
            </div>
            <ul className={styles.formation_list}>
              <li>
                <a>#DevOps</a>
              </li>
              <li>
                <a>#Technicien d'Assistance en Informatique</a>
              </li>
              <li>
                <a>#Concepteur Développeur d’Applications</a>
              </li>
              <li>
                <a>#Technicien Supérieur Systèmes & Réseaux</a>
              </li>
              <li>
                <a>#Administrateur d'infrastructures sécurisées</a>
              </li>
              <li>
                <a>#Assistant.e Commercial.e</a>
              </li>
              <li>
                <a>#Formateur Pour Adultes</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
