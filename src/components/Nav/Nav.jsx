import CartButton from '../CartButton/CartButton';
import PageLink from '../PageLink/PageLink';
import styles from './Nav.module.css';

const Nav = ()=>{
    return <>
    <div className={styles.nav}>
        <div className={styles.logo}>CART</div>
        <div className={styles.links}>
            <PageLink route="/" name="Home" active='true'/>
            <PageLink route="shop" name="Shop"/>
        </div>
       
            <CartButton active={false}/>

    </div>
    </>
};

export default Nav;