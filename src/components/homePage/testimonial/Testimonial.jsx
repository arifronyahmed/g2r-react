import styles from "./Testimonial.module.css";

import EmblaCarousel from "../../ui/emblaCarousel/EmblaCarousel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Testimonial() {
  return (
    <section>
      <h4 className={styles.rightBox_title}>Témoignage</h4>
      <div className="container grid grid-column--2">
        <div className={styles.leftBox}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className={styles.rightBox}>
          <h3 className={styles.rightBox_subtitle}>
            ce que nos stagiaires disent de nous
          </h3>
        </div>
      </div>
    </section>
  );
}
