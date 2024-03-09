import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li>
        <a href="#">Collection</a>
      </li>
      <li>
        <a href="#">Men</a>
      </li>
      <li>
        <a href="#">Women</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
