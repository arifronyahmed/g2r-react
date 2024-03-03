import styles from "./Centers.module.css";

export default function Centers() {
  return (
    <section>
      <div className="container">
        <div className={styles.title}>Nos centres en Île-de-France :</div>
        <div className="grid grid-column--4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </section>
  );
}
