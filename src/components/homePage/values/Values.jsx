import {
  FaPeopleCarry,
  FaUserGraduate,
  FaFeatherAlt,
  FaSignal,
} from "react-icons/fa";
import styles from "./Values.module.css";

const data = [
  {
    icon: <FaPeopleCarry />,
    title: "Valorisation de votre parcours",
    text: "Le temps est venu de faire le point sur votre carrière et d’affirmer vos atouts. Faites le bilan avec nos experts consultants.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Se former avec souplesse et efficacité",
    text: "Entreprises, salariés, indépendants, ou demandeurs d’emploi, trouver votre formation idéale et sur mesure.",
  },
  {
    icon: <FaFeatherAlt />,
    title: "Techniques de management et pilotage des RH",
    text: "Nos conseils et stratégies au service du développement de votre entreprise à échelle humaine.",
  },
  {
    icon: <FaSignal />,
    title: "Connaissance parfaite du marché de l'emploi",
    text: "Confiez-nous vos projets et évaluons ensemble leur faisabilité. Nos dispositifs accompagnent votre mobilité professionnelle.",
  },
];

export default function Values() {
  return (
    <section className={styles.values}>
      <div className="container grid grid-column--4">
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
