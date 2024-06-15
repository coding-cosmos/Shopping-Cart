import styles from "./WishlistButton.module.css";
import PropTypes from "prop-types";

const WishlistButton = ({ state, onClick }) => {
  const url = state ? "/images/heart_red.svg" : "/images/heart_white.svg";

  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <img src={url} alt="" className={styles.icon} />
      </div>
    </>
  );
};

WishlistButton.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func,
};

export default WishlistButton;
