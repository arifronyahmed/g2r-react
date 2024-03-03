import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.text_box}>
      <div className="container">
        <div className={styles.title}>À propos de nous:</div>
        <div className={styles.text}>
          <p>
            Depuis 2003, G2R Formation, au cœur de l’agglomération parisienne et
            Île de France, est un organisme spécialisé dans la formation pour
            adultes et le conseil.
          </p>
          <p>
            <span className={styles.text_sub}>Notre mission première :</span>{" "}
            apporter des solutions pour toutes entreprises, salariés et
            demandeurs d’emploi.
          </p>
          <p>
            En réflexion permanente pour aider les entreprises (grands groupes,
            PME-PMI,TPE indépendants, professions libérales) et les salariés à
            mener à bien leurs projets de changement, nous nous adaptons à leurs
            besoins avec <strong>flexibilité et réactivité</strong>.
          </p>
          <p>
            <span className={styles.text_sub}>Nos atouts :</span> anticipation
            et connaissance parfaite du marché du travail. G2R est doté d’une
            habilitation au <strong>CFA</strong> et
            <strong>
              {" "}
              toutes nos formations sont accessibles en Alternance
            </strong>
            .
          </p>
          <p>
            Nous proposons des <strong>parcours individualisés</strong> en
            adéquation avec les priorités des employeurs et de faire valoir le
            “clé en main”, ingénierie financière comprise.
          </p>
          <p>
            Une relation privilégiée avec les organismes gestionnaires de fonds
            nous permet de fournir dans les meilleurs délais des solutions
            globales, intégrant un programme de{" "}
            <strong>formation personnalisé</strong>, des intervenants
            spécialistes dans le domaine et un financement partiel ou total des
            actions de
            <strong> formation entreprises</strong>.
          </p>
          <p>
            L’équipe de G2R intervient aussi bien sur la préparation aux
            changements que sur leur accompagnement. Nos consultants mettent
            tout en œuvre pour permettre à toute entreprise d’intégrer une
            <strong>
              {" "}
              évolution organisationnelle, technique ou managériale
            </strong>
            .
          </p>
          <p>
            Le succès de nos programmes se mesure en retour à l’emploi, création
            de valeur, gain de parts de marché, productivité et qualité du
            climat social.
          </p>
        </div>
      </div>
    </section>
  );
}
