import { useLocation } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import PageLink from "../PageLink/PageLink";
import styles from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();
  const page = location.pathname;
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>CART</div>
        <div className={styles.links}>
          <PageLink route="/" name="Home" active={page == '/' || page=='/cart'} />
          <PageLink route="/shop" name="Shop" active={page == '/shop' || page=="/shop/cart"} />
        </div>

        <CartButton active={page=="/cart" || page=="/shop/cart"} />
      </div>
    </>
  );
};



export default Nav;
