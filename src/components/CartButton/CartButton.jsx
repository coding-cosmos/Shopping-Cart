import styles from "./CartButton.module.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CartButton = ({active})=>{
    const activeClass = active?styles.cart_active:styles.cart;
    const icon = active?"cart-outline.svg":"cart.svg";

    return <Link to="cart">
        <div className={activeClass}>
            <img className={styles.img} src={icon} alt="" />
        </div>
    </Link>
}

CartButton.propTypes = {
    active: PropTypes.bool,
}
export default CartButton;