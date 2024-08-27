import styles from "./Heading.module.css";
import LoginBtn from "./LoginBtn";
import { FaUpload } from "react-icons/fa6";
import { FiChevronUp } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
function Heading() {
  return (
    <div className={styles.head}>
      <p className={styles.logo1}>Pixabay</p>
      <button className={styles.logo2}>PX</button>
      <div className={styles.left}>
        <button className={styles.expo}>
          Explore <FiChevronUp />
        </button>
        <LoginBtn></LoginBtn>
        <button className={styles.upload}>
          <FaUpload /> Upload
        </button>
        <button className={styles.hanger}>
          <FiAlignJustify />
        </button>
      </div>
    </div>
  );
}

export default Heading;
