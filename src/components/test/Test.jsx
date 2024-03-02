import styles from "./Test.module.css";

export default function Test() {
  return (
    <div className={styles.carousel}>
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
