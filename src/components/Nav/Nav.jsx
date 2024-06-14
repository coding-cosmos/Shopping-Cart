import CartButton from "../CartButton/CartButton";
import PageLink from "../PageLink/PageLink";
import styles from "./Nav.module.css";
import PropType from 'prop-types';

const Nav = ({page}) => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>CART</div>
        <div className={styles.links}>
          <PageLink route="/" name="Home" active={page == 'home'} />
          <PageLink route="/shop" name="Shop" active={page == 'shop'} />
        </div>

        <CartButton active={false} />
      </div>
    </>
  );
};

Nav.propTypes = {
    page: PropType.string.isRequired,
}


export default Nav;
