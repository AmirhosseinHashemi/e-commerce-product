import PropType from "prop-types";

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

Wrapper.propTypes = {
  children: PropType.any,
};

export default Wrapper;
