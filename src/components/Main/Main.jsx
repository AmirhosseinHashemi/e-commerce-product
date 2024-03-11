import PropType from "prop-types";
import styles from "./Main.module.css";

function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

Main.propTypes = {
  children: PropType.any,
};

export default Main;
