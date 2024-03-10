import PropType from "prop-types";
// import styles from "./Main.module.css";

function Main({ children }) {
  return <main>{children}</main>;
}

Main.propType = {
  children: PropType.any,
};

export default Main;
