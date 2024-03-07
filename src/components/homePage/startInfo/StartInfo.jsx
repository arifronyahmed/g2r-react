import styles from "./StartInfo.module.css";
import { MdOutlineTimer, MdEventAvailable } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import data from "./startInfoData";
import Card from "../../ui/Card";

export default function StartInfo() {
  return (
    <section className={styles.start_info}>
      <div className="container">
        <div className={styles.text_box}>
          <h3 className={styles.title}>{data.title}</h3>
          <h5 className={styles.text}>{data.infoText}</h5>
          <address className={styles.location}>
            <span>
              <FaMapMarkerAlt />
            </span>
            {data.location}
          </address>
        </div>

        <div className="grid grid-column--4 grid-gap--hlg grid-gap--vlg">
          {data.cards.map((card, index) => (
            <Card key={index} className={styles.card}>
              <figure>
                <img
                  src={card.image}
                  alt="group of people in the meeting"
                  className={styles.img}
                />
              </figure>
              <h6 className={styles.card_title}>Title</h6>
              <div className={styles.card_element}>
                <span className={styles.card_icon}>
                  <MdEventAvailable />
                </span>
                <strong className={styles.card_seat}>
                  {card.seatAvailable}
                </strong>
                places disponibles
              </div>
              <time
                dateTime={card.startingDate}
                className={styles.card_element}
              >
                <span className={styles.card_icon}>
                  <MdOutlineTimer />
                </span>
                Début: <strong>{card.startingDate}</strong>
              </time>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
