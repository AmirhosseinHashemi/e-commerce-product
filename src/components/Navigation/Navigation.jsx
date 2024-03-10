import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li>
        <a className={styles.link} href="#">
          Collection
        </a>
      </li>
      <li>
        <a className={styles.link} href="#">
          Men
        </a>
      </li>
      <li>
        <a className={styles.link} href="#">
          Women
        </a>
      </li>
      <li>
        <a className={styles.link} href="#">
          About
        </a>
      </li>
      <li>
        <a className={styles.link} href="#">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
