import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  const hero = {
    heading: "L'école Tech qui prend soin de votre avenir, où que vous soyez !",
    linkText: "Explorer nos formations",
  };

  return (
    <section className={styles.hero}>
      <div className="container grid grid-column--2">
        <div className={styles.leftBox}>
          <h1 className={styles.heading}>{hero.heading}</h1>
          <Button className={"btn-primary"}>
            <Link to={"/formations"}>{hero.linkText}</Link>
          </Button>
        </div>
        <figure className={styles.right}>
          <img
            src="undraw_educator_re_ju47.svg"
            alt="illustration of 2 girls seating in the classroom people"
            className={styles.image}
          />
        </figure>
      </div>
    </section>
  );
}
