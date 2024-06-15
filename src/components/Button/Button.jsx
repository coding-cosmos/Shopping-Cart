import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ text, route, onClick }) => {
  return (
    <>
      {route ? (
        <Link to={route} className={styles.link}>
          <div className={styles.btn} onClick={onClick}>
            {text}
          </div>
        </Link>
      ) : (
        <div className={styles.btn} onClick={onClick}>
          {text}
        </div>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  route: PropTypes.string,
};

export default Button;
