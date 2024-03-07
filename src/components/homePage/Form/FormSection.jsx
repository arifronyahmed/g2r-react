import { FiNavigation, FiEdit3, FiSmartphone } from "react-icons/fi";
import styles from "./FormSection.module.css";
import Form from "./Form";

export default function FormSection() {
  const contactMethods = [
    {
      icon: <FiNavigation />,
      title: "Notre établissement",
      subtitle: "102 Av. Philippe Auguste, 75011 Paris",
    },
    {
      icon: <FiEdit3 />,
      title: "Renseignements Généraux",
      subtitle: "sales@domain.com",
    },
    {
      icon: <FiSmartphone />,
      title: "Passer un appel téléphonique",
      subtitle: "01 44 64 85 85",
    },
  ];

  return (
    <div>
      <div className="container">
        <h4 className={styles.title}>Pour nous trouver</h4>
        <p className={styles.subtitle}>
          Vous avez un projet dont vous aimeriez discuter avec nous ?
          Écrivez-nous ci-dessous, nous serions ravis de parler.
        </p>

        <div className="grid grid-column--2 grid-gap--hsm">
          <div className="grid grid-row--3 grid-gap--vsm">
            {contactMethods.map((method, index) => (
              <address key={index} className={styles.leftBox_item}>
                <div className={styles.icon}>{method.icon}</div>
                <div>
                  <div className={styles.item_title}>{method.title}</div>
                  <div className={styles.item_subtitle}>{method.subtitle}</div>
                </div>
              </address>
            ))}
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
