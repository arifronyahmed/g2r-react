import styles from "./Partners.module.css";

export default function Partners() {
  const logos = [
    { src: "France-travail-2023.svg.png", alt: "logo of france travail" },
    { src: "Ville_de_Paris_logo_2019.svg.png", alt: "logo of Ville de Paris" },
    { src: "20211228035137!RATP.svg", alt: "logo of RATP" },
    { src: "Dev_logo_rgb.png", alt: "logo of Dev" },
  ];

  return (
    <section className={styles.partners}>
      <div className="container">
        <h4 className={styles.title}>Nos partenaires</h4>
        <figure className={styles.logo_box}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={styles.logo}
            />
          ))}
        </figure>
      </div>
    </section>
  );
}
