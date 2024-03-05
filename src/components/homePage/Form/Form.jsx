import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="*Arif Ahmed" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="*arifahmed@gmail.com" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" placeholder="*arifahmed@gmail.com" />
      </div>
      <button className={`${styles.form_btn} btn`}>Submit</button>
    </form>
  );
}
