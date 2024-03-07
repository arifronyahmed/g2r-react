import styles from "./Stats.module.css";

export default function Stats() {
  const statsInfo = {
    imageSrc: "/undraw_winners_re_wr1l.svg",
    altText: "illustration of two people winning",
    statsData: [
      {
        number: "2956+",
        text: "femmes & hommes accompagnés depuis 2012",
      },
      {
        number: "98.5%",
        text: "Moyenne taux de satisfaction CPF et Google Avis",
      },
      {
        number: "10+",
        text: "sites à Paris et en région parisienne",
      },
      {
        number: "100%",
        text: "de réalisation des entretiens à 6 mois",
      },
    ],
  };

  return (
    <section className={styles.stat}>
      <div className="container grid grid-column--2">
        <figure>
          <img
            src={statsInfo.imageSrc}
            alt={statsInfo.altText}
            className={styles.img}
          />
        </figure>
        <div>
          <h4 className={styles.title}>Notre Réalisation</h4>
          <div className="grid grid-column--2 grid-row--gap">
            {statsInfo.statsData.map((item, index) => (
              <div key={index} className={styles.stat_box}>
                <h3 className={styles.number}>{item.number}</h3>
                <div className={styles.text}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
