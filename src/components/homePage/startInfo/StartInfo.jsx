import styles from "./StartInfo.module.css";
import { MdOutlineTimer, MdEventAvailable } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import data from "./startInfoData";

export default function StartInfo() {
  return (
    <section className={styles.start_info}>
      <div className="container">
        <div className={styles.text_box}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.text}>{data.infoText}</div>
          <div className={styles.location}>
            <span>
              <FaMapMarkerAlt />
            </span>
            {data.location}
          </div>
        </div>

        <div className="grid grid-column--4">
          {data.cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div>
                <img
                  src={card.image}
                  alt="group of people in the meeting"
                  className={styles.img}
                />
              </div>
              <div className={styles.card_title}>Title</div>
              <div className={styles.card_element}>
                <span className={styles.card_icon}>
                  <MdEventAvailable />
                </span>
                <strong className={styles.card_seat}>
                  {card.seatAvailable}
                </strong>
                places disponibles
              </div>
              <div className={styles.card_element}>
                <span className={styles.card_icon}>
                  <MdOutlineTimer />
                </span>
                Début: <strong>{card.startingDate}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
