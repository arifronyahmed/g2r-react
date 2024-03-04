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

        <section className="grid grid-column--2">
          <div className={styles.formation_box}>
            <div className={styles.formation_title}>
              Nos formations diplômantes / certifiantes
            </div>
            <div className={styles.formation_list}>
              <div>#Concepteur Développeur d’Applications</div>
              <div>#DevOps</div>
              <div>#Technicien d'Assistance en Informatique</div>
              <div>#Technicien Supérieur Systèmes & Réseaux</div>
              <div>#Administrateur d'infrastructures sécurisées</div>
              <div>#Assistant.e Commercial.e</div>
              <div>#Formateur Pour Adultes</div>
            </div>
          </div>
          <div className={styles.formation_box}>
            <div className={styles.formation_title}>
              Nos formations institutionnelles / professionnalisantes
            </div>
            <div className={styles.formation_list}>
              <div>#Concepteur Développeur d’Applications</div>
              <div>#DevOps</div>
              <div>#Technicien d'Assistance en Informatique</div>
              <div>#Technicien Supérieur Systèmes & Réseaux</div>
              <div>#Administrateur d'infrastructures sécurisées</div>
              <div>#Assistant.e Commercial.e</div>
              <div>#Formateur Pour Adultes</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
