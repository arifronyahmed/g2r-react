import styles from "./FormSection.module.css";
import { FiNavigation } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import Form from "./Form";

export default function FormSection() {
  return (
    <div>
      <div className="container">
        <div className={styles.title}>Pour nous trouver</div>
        <div className={styles.subtitle}>
          Vous avez un projet dont vous aimeriez discuter avec nous ?
          Écrivez-nous ci-dessous, nous serions ravis de parler.
        </div>

        {/* *************************************** */}
        <div className="grid grid-column--2 grid-gap--hsm">
          <div className="grid grid-row--3 grid-gap--vsm">
            <div className={styles.leftBox_item}>
              <div className={styles.icon}>
                <FiNavigation />
              </div>
              <div>
                <div className={styles.item_title}>Notre établissement</div>
                <div className={styles.item_subtitle}>
                  102 Av. Philippe Auguste, 75011 Paris
                </div>
              </div>
            </div>
            <div className={styles.leftBox_item}>
              <div className={styles.icon}>
                <FiEdit3 />
              </div>
              <div>
                <div className={styles.item_title}>Renseignements Généraux</div>
                <div className={styles.item_subtitle}>sales@domain.com</div>
              </div>
            </div>
            <div className={styles.leftBox_item}>
              <div className={styles.icon}>
                <FiSmartphone />
              </div>
              <div>
                <div className={styles.item_title}>
                  Passer un appel téléphonique
                </div>
                <div className={styles.item_subtitle}>01 44 64 85 85</div>
              </div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
