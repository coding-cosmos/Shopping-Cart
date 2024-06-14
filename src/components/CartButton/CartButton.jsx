import styles from "./CartButton.module.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";

const CartButton = ({active})=>{
    const activeClass = active?styles.cart_active:styles.cart;
    const icon = active?"/images/cart-outline.svg":"/images/cart.svg";
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const handleClick = ()=>{
        if(path=="/cart"||path=="/shop/cart"){
            navigate(-1);
        }
    };

    return <Link to="cart" onClick={handleClick}>
        <div className={activeClass}>
            <img className={styles.img} src={icon} alt="" />
        </div>
    </Link>
}

CartButton.propTypes = {
    active: PropTypes.bool,
}
export default CartButton;