import styles from "./LoginBtn.module.css";

function LoginBtn() {
  return (
    <div className={styles.main}>
      <button className={styles.btn}>Log in</button>
      <button className={styles.btn}>Join</button>
    </div>
  );
}

export default LoginBtn;
