import styles from "./CartButton.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { getNoOfItems } from "../../data/CartData";
import { useEffect, useState } from "react";

const CartButton = ({ active }) => {
  const activeClass = active ? styles.cart_active : styles.cart;
  const quantityClass = active ? styles.quantity_active : styles.quantity;
  const icon = active ? "/images/cart-outline.svg" : "/images/cart.svg";

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [quantity, setQuantity] = useState(getNoOfItems());

  const handleClick = () => {
    if (path == "/cart" || path == "/shop/cart") {
      navigate(-1);
    }
  };

  useEffect(() => {
    const handleStorage = () => {
      setQuantity(getNoOfItems());
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <Link to="cart" onClick={handleClick} className={styles.link}>
      <div className={activeClass}>
        <img className={styles.img} src={icon} alt="" />
        <div className={quantityClass}>{quantity}</div>
      </div>
    </Link>
  );
};

CartButton.propTypes = {
  active: PropTypes.bool,
};
export default CartButton;
