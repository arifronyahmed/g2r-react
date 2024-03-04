import styles from "./FormationCardGrid.module.css";
const cardData = [
  {
    title: "Concepteur Développeur d’Applications",
    subtitle: "8 MOIS TITRE PRO BAC+3",
    options: ["#Presantial", "#Alternance"],
    imageSrc: "/undraw_app_wireframe_re_d467.svg",
    altText: "illustration of wirefriming",
  },

  {
    title: "Technicien d'Assistance en Informatique",
    subtitle: "6 MOIS TITRE PRO BAC",
    options: ["#Presantial", "#Alternance"],
    imageSrc: "../../../public/undraw_programmer_re_owql.svg",
    altText: "illustration of programmer",
  },
  {
    title: "DevOps",
    subtitle: "8 MOIS TITRE PRO BAC+3",
    options: ["#Presantial", "#Alternance"],
    imageSrc: "/undraw_product_iteration_kjok.svg",
    altText: "illustration of product iteration",
  },
  {
    title: "Titre Professionnel Assistant.e Commercial.e",
    subtitle: "4 MOIS TITRE PRO BAC+2",
    options: ["#Presantial", "#Online"],
    imageSrc: "/undraw_empty_cart_co35.svg",
    altText: "illustration of an empty cart",
  },
  {
    title: "Technicien Supérieur Systèmes & Réseaux",
    subtitle: "12 MOIS TITRE PRO BAC+3",
    options: ["#Presantial", "#Alternance"],
    imageSrc: "/public/undraw_connected_world_wuay.svg",
    altText: "illustration of connected world",
  },
  {
    title: "Administrateur d'infrastructures sécurisées",
    subtitle: "6 MOIS TITRE PRO BAC+5",
    options: ["#Presantial", "#Alternance"],
    imageSrc: "/undraw_server_down_s-4-lk.svg",
    altText: "illustration of server down",
  },
  {
    title: "Chef de Projet",
    subtitle: "4 MOIS TITRE PRO",
    options: ["#Presantial", "#Alternance"],
    imageSrc: "/undraw_projections_re_ulc6.svg",
    altText: "illustration of projections with charts",
  },
  {
    title: "Compétences Numériques",
    subtitle: "4 MOIS TITRE PRO",
    options: ["#Presantial"],
    imageSrc: "/undraw_work_time_re_hdyv.svg",
    altText: "illustration of work time",
  },
];

export default function FormationCardGrid() {
  return (
    <section>
      <div
        className={`${styles.container} grid grid-column--2 grid-gap--hsm grid-gap--vlg`}
      >
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div>
              <img
                src={card.imageSrc}
                alt={card.altText}
                className={styles.image}
              />
            </div>
            <div className={styles.text_box}>
              <div className={styles.title}>{card.title}</div>
              <div className={styles.subtitle}>{card.subtitle}</div>
              <div className={styles.options}>
                {card.options.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
              </div>
              <button>En savoir plus</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
