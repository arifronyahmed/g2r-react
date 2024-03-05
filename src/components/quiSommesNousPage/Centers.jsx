import styles from "./Centers.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const centerData = [
  {
    id: 1,
    city: "Cergy",
    address: "27 avenue de la Constellation, 95000 Cergy",
    imagePath: "/villes/Cergy.png",
    altText: "picture of cergy",
  },
  {
    id: 2,
    city: "Antony",
    address: "101 rue de la fontaine Grelot, 92160 Antony",
    imagePath: "/villes/Commune_antony_fontaine.jpg",
    altText: "picture of antony",
  },
  {
    id: 3,
    city: "Aubervilliers",
    address: "68 rue André Karman, 93300 Aubervilliers",
    imagePath: "/villes/Place_Hotel_Ville_Aubervilliers_1.jpg",
    altText: "picture of Aubervilliers",
  },
  {
    id: 4,
    city: "Créteil",
    address: "70 avenue du Général de Gaulle, 94000 Créteil",
    imagePath: "/villes/creteil.png",
    altText: "picture of Creteil",
  },
  {
    id: 5,
    city: "Eaubonne",
    address: "95 rue du Général Leclerc, 95600 Eaubonne",
    imagePath: "/villes/Eaubonne.png",
    altText: "picture of Eaubonne",
  },
  {
    id: 6,
    city: "Etampes",
    address: "92 rue de la République, 91150",
    imagePath: "/villes/etampes.png",
    altText: "picture of Etampes",
  },
  {
    id: 7,
    city: "Garges-lès-Gonesse",
    address: "36 Avenue Fréderic Joliot-Curie, 95140 Garges-lès-Gonesse",
    imagePath: "/villes/garges.png",
    altText: "picture of Garges les gonesse",
  },

  {
    id: 8,
    city: "Le Kremlin-Bicêtre",
    address: "11 rue Carnot, 94270 Le Kremlin-Bicêtre",
    imagePath: "/villes/KB.png",
    altText: "picture of Kremlin Bicetre",
  },
  {
    id: 9,
    city: "Mantes-la-Jolie",
    address: "2 rue Pierre de Ronsard, 78200 Mantes-la-Jolie",
    imagePath: "/villes/mantes.png",
    altText: "picture of Mantes la jolie",
  },
  {
    id: 10,
    city: "Massy",
    address: "5 avenue Carnot, 91300 Massy",
    imagePath: "/villes/massy.png",
    altText: "picture of Massy",
  },
  {
    id: 11,
    city: "Montreuil",
    address: "17 place du Général De Gaulle, 93100 Montreuil",
    imagePath: "/villes/Montreuil.png",
    altText: "picture of Montreuil",
  },
  {
    id: 12,
    city: "Pantin",
    address: "100 avenue du Général Leclerc, 93500 Pantin",
    imagePath: "/villes/pantin.png",
    altText: "picture of Pantin",
  },
];

export default function Centers() {
  return (
    <section>
      <div className="container">
        <div className={styles.title}>Nos centres en Île-de-France :</div>
        <div className="grid grid-column--4 grid-gap--hlg grid-gap--vlg">
          {centerData.map((center) => (
            <div key={center.id} className={styles.card}>
              <img
                src={center.imagePath}
                alt={center.altText}
                className={styles.image}
              />
              <div className={styles.card_box}>
                <div className={styles.card_title}>{center.city}</div>
                <div className={styles.card_text}>
                  <div className={styles.icon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>{center.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
