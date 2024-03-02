import {
  FaPeopleCarry,
  FaUserGraduate,
  FaFeatherAlt,
  FaSignal,
} from "react-icons/fa";
import styles from "./Values.module.css";

export default function Values() {
  return (
    <div className="container grid grid-column--4">
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaPeopleCarry />
        </div>
        <div className={styles.title}>Valorisation de votre parcours</div>
        <p className={styles.text}>
          Le temps est venu de faire le point sur votre carrière et d’affirmer
          vos atouts. Faites le bilan avec nos experts consultants.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaUserGraduate />
        </div>
        <div className={styles.title}>
          Se former avec souplesse et efficacité
        </div>
        <p className={styles.text}>
          Entreprises, salariés, indépendants, ou demandeurs d’emploi, trouver
          votre formation idéale et sur mesure.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaFeatherAlt />
        </div>
        <div className={styles.title}>
          Techniques de management et pilotage des RH
        </div>
        <p className={styles.text}>
          Nos conseils et stratégies au service du développement de votre
          entreprise à échelle humaine.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaSignal />
        </div>
        <div className={styles.title}>
          Connaissance parfaite du marché de l'emploi
        </div>
        <p className={styles.text}>
          Confiez-nous vos projets et évaluons ensemble leur faisabilité. Nos
          dispositifs accompagnent votre mobilité professionnelle.
        </p>
      </div>
    </div>
  );
}
